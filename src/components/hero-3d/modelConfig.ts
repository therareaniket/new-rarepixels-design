export const MODEL_CONFIG = [
	{
    	// Eye — UI/UX Design Services
    	modelPath: 'https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/3D-Models/final-eye.element.glb',
    	camera: [0.8, -1, 10] as [number, number, number],
    	position: [0, 0.1, 0] as [number, number, number],
    	scale: 0.68,
	},
	{
    	// Brain — Custom Web & App Development
    	modelPath: 'https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/3D-Models/final-brain.element.glb',
    	camera: [-0.6, -1.9, 9.9] as [number, number, number],
    	position: [0, -0.4, 0] as [number, number, number],
    	scale: 1.2,
	},
	{
    	// Heart — Brand Identity Design
    	modelPath: 'https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/3D-Models/final-heart.element.glb',
    	camera: [2.8, 3.6, 10] as [number, number, number],
    	position: [-0.1, 0.1, 0.6] as [number, number, number],
    	scale: 3.8,
	},
	{
    	// Hand — Social Media Management Services
    	modelPath: 'https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/3D-Models/final-hand.element.glb',
    	camera: [-0.9, 0, 10] as [number, number, number],
    	position: [-0.2, -0.1, 0] as [number, number, number],
    	scale: 1.6,
	},
]




export const MORPH_CONFIG = {
	particleCount: 200000,

	solidFadeOutDuration: 0.5,
	particleMorphDuration: 4,
	solidFadeInDuration: 3,

	pointSize: 2.2,
	particleOpacity: 0.9,

	// Maximum particle displacement halfway through a morph.
	morphNoiseStrength: 0.12,
} as const;




export const EDGE_CONFIG = {
	// Any hex/CSS color works. Try "#ffffff" for a subtler look
	// that matches the particle color instead of the red accent.
	color: '#FFFFFF',
 
	// Rendered in screen pixels via LineMaterial, so this stays a
	// consistent visual thickness regardless of camera distance.
	linewidth: 1,
 
	opacity: 0.35,
 
	// Degrees. Lower = more surface crease lines picked up.
	// Higher = only the strongest silhouette edges remain.
	// 15–25 is a good starting range for organic/anatomical models.

	// angleThresholdDegrees: 20,
} as const;