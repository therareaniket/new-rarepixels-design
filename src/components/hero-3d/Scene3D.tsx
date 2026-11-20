"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import Model3D from "./Model3D";
import { MODEL_CONFIG } from "./modelConfig";

interface Scene3DProps {
	activeIndex?: number;
}

interface CameraControllerProps {
	x: number;
	y: number;
	z: number;
}

const CameraController = ({ x, y, z }: CameraControllerProps) => {
	const { camera } = useThree();

	useEffect(() => {
		camera.lookAt(0, 0, 0);

		const cameraTween = gsap.to(camera.position, {
			x,
			y,
			z,
			duration: 1,
			ease: "power3.out",
			onUpdate: () => {
				camera.lookAt(0, 0, 0);
			},
		});

		return () => {
			cameraTween.kill();
		};
	}, [camera, x, y, z]);

	return null;
};

const Scene3D = ({ activeIndex = 0 }: Scene3DProps) => {
	const safeIndex =
		activeIndex >= 0 && activeIndex < MODEL_CONFIG.length ? activeIndex : 0;
	const config = MODEL_CONFIG[safeIndex];
	const [cx, cy, cz] = config.camera;

	useEffect(() => {
		useGLTF.preload(MODEL_CONFIG[0].modelPath, "/draco/");

		const preloadTimer = window.setTimeout(() => {
			MODEL_CONFIG.slice(1).forEach(({ modelPath }) => {
				useGLTF.preload(modelPath, "/draco/");
			});
		}, 1500);

		return () => {
			window.clearTimeout(preloadTimer);
		};
	}, []);

	return (
		<div className="hm-hero-ui-ux-modal w-full h-full">
			<Canvas
				camera={{ position: config.camera, fov: 25 }}
				dpr={[1, 2]}
				gl={{ alpha: true, antialias: true }}
				className="canvas-3d-wrapper w-full h-full"
			>
				<ambientLight intensity={0.5} />
				<directionalLight position={[0, 0, 5]} intensity={0.01} color="#ffffff" />
				<CameraController x={cx} y={cy} z={cz} />

				<Suspense fallback={null}>
					<Model3D key={config.modelPath} config={config} />
				</Suspense>

				<OrbitControls target={[0, 0, 0]} enableZoom={false} enablePan={false} enableRotate={false} />
				<Environment preset="sunset" />
			</Canvas>
		</div>
	);
};

export default Scene3D;