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

const MAX_TURN_Y = 0.60; // Left / right tracking angle (radians)
const MAX_TURN_X = 0.30; // Up / down tracking angle (radians)
const MAX_TILT_Z = 0.06; // Subtle banking tilt when moving horizontally

const Model3D = ({
	config,
	idleResumeDelay = 1.5,
}: Model3DProps) => {
	const groupRef = useRef<THREE.Group>(null);
	const pointerRef = useRef({ x: 0, y: 0 });
	const hasInteractedRef = useRef(false);
	const lastMoveTimeRef = useRef(-Infinity);
	const autoBlendRef = useRef(1); // 1 = full auto-motion, 0 = full pointer tracking
	const elapsedRef = useRef(0);

	const { scene } = useGLTF(config.modelPath);
	const clonedScene = useMemo(() => scene.clone(true), [scene]);

	useEffect(() => {
		elapsedRef.current = 0;
		hasInteractedRef.current = false;
		lastMoveTimeRef.current = -Infinity;
		autoBlendRef.current = 1;
		pointerRef.current.x = 0;
		pointerRef.current.y = 0;
	}, [config.modelPath]);

	useEffect(() => {
		const box = new THREE.Box3().setFromObject(clonedScene);
		const center = box.getCenter(new THREE.Vector3());

		// Shift mesh so its center sits at the origin (0, 0, 0)
		clonedScene.position.sub(center);
	}, [clonedScene]);

	useEffect(() => {
		const handlePointerMove = (e: PointerEvent) => {
			const nx = (e.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
			const ny = (e.clientY / Math.max(window.innerHeight, 1)) * 2 - 1;

			pointerRef.current.x = THREE.MathUtils.clamp(nx, -1, 1);
			pointerRef.current.y = THREE.MathUtils.clamp(ny, -1, 1);
			hasInteractedRef.current = true;
			lastMoveTimeRef.current = performance.now() / 1000;
		};

		const handlePointerLeave = () => {
			pointerRef.current.x = 0;
			pointerRef.current.y = 0;
			// Allow auto-motion to take over right away when cursor leaves the viewport
			lastMoveTimeRef.current = -Infinity;
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

		const nowSec = performance.now() / 1000;
		const isActivelyInteracting =
			hasInteractedRef.current && nowSec - lastMoveTimeRef.current < idleResumeDelay;

		// Smoothly blend to 0 while user is actively moving the pointer, and back to 1 when idle
		const targetBlend = isActivelyInteracting ? 0 : 1;
		autoBlendRef.current = THREE.MathUtils.damp(
			autoBlendRef.current,
			targetBlend,
			4,
			dt
		);

		// Slower, smoother continuous look-around motion
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
			<primitive object={clonedScene} />
		</group>
	);
};

export default React.memo(Model3D);