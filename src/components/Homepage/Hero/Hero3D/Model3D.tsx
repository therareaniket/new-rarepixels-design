"use client";

import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MODEL_CONFIG } from "./modelConfig";

useGLTF.setDecoderPath("/draco/");

interface Model3DProps {
	config: (typeof MODEL_CONFIG)[number];
	/** Seconds of pointer inactivity before auto-motion smoothly resumes */
	idleResumeDelay?: number;
}

const MAX_TURN_Y = 0.5;
const MAX_TURN_X = 0.3;
const MAX_TILT_Z = 0.1;

// Subtle entrance so your exact config.scale and config.position stay intact
const ENTRANCE_SCALE_MULTIPLIER = 1.06;
const ENTRANCE_SPIN_Y = Math.PI * 0.35;

const Model3D = ({
	config,
	idleResumeDelay = 1.5,
}: Model3DProps) => {
	const groupRef = useRef<THREE.Group>(null);
	const entranceRef = useRef<THREE.Group>(null);
	const pointerRef = useRef({ x: 0, y: 0 });
	const hasInteractedRef = useRef(false);
	const lastMoveTimeSecRef = useRef(-Infinity);
	const autoBlendRef = useRef(1);
	const elapsedRef = useRef(0);
	const entranceProgressRef = useRef(0);

	const { scene } = useGLTF(config.modelPath);
	const clonedScene = useMemo(() => {
		const copy = scene.clone(true);
		copy.position.set(0, 0, 0);
		copy.rotation.set(0, 0, 0);
		copy.scale.set(1, 1, 1);
		return copy;
	}, [scene]);

	useEffect(() => {
		elapsedRef.current = 0;
		hasInteractedRef.current = false;
		lastMoveTimeSecRef.current = -Infinity;
		autoBlendRef.current = 1;
		pointerRef.current.x = 0;
		pointerRef.current.y = 0;
		entranceProgressRef.current = 0;

		if (entranceRef.current) {
			entranceRef.current.scale.setScalar(ENTRANCE_SCALE_MULTIPLIER);
			entranceRef.current.rotation.set(0, -ENTRANCE_SPIN_Y, 0);
		}
	}, [config.modelPath, clonedScene]);

	useEffect(() => {
		const handlePointerMove = (e: PointerEvent) => {
			const nx = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
			const ny = (e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;

			pointerRef.current.x = THREE.MathUtils.clamp(nx, -1, 1);
			pointerRef.current.y = THREE.MathUtils.clamp(ny, -1, 1);
			hasInteractedRef.current = true;
			lastMoveTimeSecRef.current = performance.now() / 1000;
		};

		const handlePointerLeave = () => {
			pointerRef.current.x = 0;
			pointerRef.current.y = 0;
			lastMoveTimeSecRef.current = -Infinity;
		};

		window.addEventListener("pointermove", handlePointerMove, { passive: true });
		document.addEventListener("mouseleave", handlePointerLeave);

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			document.removeEventListener("mouseleave", handlePointerLeave);
		};
	}, []);

	useFrame((_, delta) => {
		const group = groupRef.current;
		if (!group) return;

		const dt = Math.min(delta, 0.05);
		elapsedRef.current += dt;

		if (entranceRef.current && entranceProgressRef.current < 1) {
			entranceProgressRef.current = Math.min(
				1,
				THREE.MathUtils.damp(entranceProgressRef.current, 1, 7, dt)
			);
			const t = entranceProgressRef.current;

			if (t >= 0.998) {
				entranceProgressRef.current = 1;
				entranceRef.current.scale.setScalar(1);
				entranceRef.current.rotation.set(0, 0, 0);
			} else {
				entranceRef.current.scale.setScalar(
					THREE.MathUtils.lerp(ENTRANCE_SCALE_MULTIPLIER, 1, t)
				);
				entranceRef.current.rotation.set(
					0,
					THREE.MathUtils.lerp(-ENTRANCE_SPIN_Y, 0, t),
					0
				);
			}
		}

		const nowSec = performance.now() / 1000;
		const isActivelyInteracting =
			hasInteractedRef.current &&
			nowSec - lastMoveTimeSecRef.current < idleResumeDelay;

		const targetBlend = isActivelyInteracting ? 0 : 1;
		autoBlendRef.current = THREE.MathUtils.damp(
			autoBlendRef.current,
			targetBlend,
			4,
			dt
		);

		const autoX = Math.sin(elapsedRef.current * 0.5) * 0.65;
		const autoY = Math.sin(elapsedRef.current * 0.8 + 0.6) * 0.55;

		const blend = autoBlendRef.current;
		const activeX = THREE.MathUtils.lerp(pointerRef.current.x, autoX, blend);
		const activeY = THREE.MathUtils.lerp(pointerRef.current.y, autoY, blend);

		const targetRotY = activeX * MAX_TURN_Y;
		const targetRotX = activeY * MAX_TURN_X;
		const targetRotZ = -activeX * MAX_TILT_Z;

		group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetRotY, 10, dt);
		group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetRotX, 10, dt);
		group.rotation.z = THREE.MathUtils.damp(group.rotation.z, targetRotZ, 10, dt);
	});

	return (
		<group
			ref={groupRef}
			position={config.position}
			rotation={[0, 0, 0]}
			scale={config.scale}
		>
			<group
				ref={entranceRef}
				scale={ENTRANCE_SCALE_MULTIPLIER}
				rotation={[0, -ENTRANCE_SPIN_Y, 0]}
			>
				<primitive object={clonedScene} />
			</group>
		</group>
	);
};

export default React.memo(Model3D);