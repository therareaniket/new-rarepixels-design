"use client";

import React, { useEffect, useRef } from "react";

interface FluidInkOverlayProps {
	/** 0..1 scroll progress from Hero's ScrollTrigger */
	progressRef: React.MutableRefObject<number>;
	/** Triggers a left-to-right fluid sweep across the full text wrapper whenever text changes */
	activeIndex: number;
	/** Optional callback exposing current left-to-right sweep head (0..1) */
	onSweepUpdate?: (sweepX: number, active: boolean) => void;
}

const FluidInkOverlay: React.FC<FluidInkOverlayProps> = ({
	progressRef,
	activeIndex,
	onSweepUpdate,
}) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const activeIndexRef = useRef<number>(activeIndex);

	const sweepProgressRef = useRef<number>(0);
	const isSweepingRef = useRef<boolean>(false);
	const lastSweepXRef = useRef<number>(0);
	const sweepSeedRef = useRef<number>(0);

	useEffect(() => {
		if (activeIndexRef.current !== activeIndex) {
			activeIndexRef.current = activeIndex;
			sweepProgressRef.current = 0.004;
			isSweepingRef.current = true;
			lastSweepXRef.current = 0;
			sweepSeedRef.current += 2.13;
		}
	}, [activeIndex]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const params: WebGLContextAttributes = {
			alpha: true,
			depth: false,
			stencil: false,
			antialias: false,
			preserveDrawingBuffer: false,
			premultipliedAlpha: true,
		};

		let gl = canvas.getContext("webgl2", params) as WebGL2RenderingContext | null;
		const isWebGL2 = Boolean(gl);
		if (!gl) {
			gl = (canvas.getContext("webgl", params) ||
				canvas.getContext("experimental-webgl", params)) as WebGL2RenderingContext | null;
		}
		if (!gl) return;

		let halfFloatTexType: number;
		let rgbaFormat: { internalFormat: number; format: number };
		let rgFormat: { internalFormat: number; format: number };
		let rFormat: { internalFormat: number; format: number };
		let supportLinearFiltering = false;

		if (isWebGL2) {
			gl.getExtension("EXT_color_buffer_float");
			supportLinearFiltering = Boolean(gl.getExtension("OES_texture_float_linear"));
			halfFloatTexType = gl.HALF_FLOAT;
			rgbaFormat = { internalFormat: gl.RGBA16F, format: gl.RGBA };
			rgFormat = { internalFormat: gl.RG16F, format: gl.RG };
			rFormat = { internalFormat: gl.R16F, format: gl.RED };
		} else {
			const halfFloat = gl.getExtension("OES_texture_half_float");
			supportLinearFiltering = Boolean(gl.getExtension("OES_texture_half_float_linear"));
			halfFloatTexType = halfFloat ? halfFloat.HALF_FLOAT_OES : gl.UNSIGNED_BYTE;
			rgbaFormat = { internalFormat: gl.RGBA, format: gl.RGBA };
			rgFormat = { internalFormat: gl.RGBA, format: gl.RGBA };
			rFormat = { internalFormat: gl.RGBA, format: gl.RGBA };
		}

		const filtering = supportLinearFiltering ? gl.LINEAR : gl.NEAREST;

		const quadBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
			gl.STATIC_DRAW
		);
		const indexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
		gl.bufferData(
			gl.ELEMENT_ARRAY_BUFFER,
			new Uint16Array([0, 1, 2, 0, 2, 3]),
			gl.STATIC_DRAW
		);

		const compileShader = (type: number, source: string) => {
			const shader = gl!.createShader(type)!;
			gl!.shaderSource(shader, source);
			gl!.compileShader(shader);
			return shader;
		};

		const createProgram = (vertSrc: string, fragSrc: string) => {
			const prog = gl!.createProgram()!;
			const vs = compileShader(gl!.VERTEX_SHADER, vertSrc);
			const fs = compileShader(gl!.FRAGMENT_SHADER, fragSrc);
			gl!.attachShader(prog, vs);
			gl!.attachShader(prog, fs);
			gl!.linkProgram(prog);
			return prog;
		};

		const baseVertexShader = `
			precision highp float;
			attribute vec2 aPosition;
			varying vec2 vUv;
			varying vec2 vL;
			varying vec2 vR;
			varying vec2 vT;
			varying vec2 vB;
			uniform vec2 texelSize;
			void main () {
				vUv = aPosition * 0.5 + 0.5;
				vL = vUv - vec2(texelSize.x, 0.0);
				vR = vUv + vec2(texelSize.x, 0.0);
				vT = vUv + vec2(0.0, texelSize.y);
				vB = vUv - vec2(0.0, texelSize.y);
				gl_Position = vec4(aPosition, 0.0, 1.0);
			}
		`;

		const splatShader = createProgram(
			baseVertexShader,
			`
			precision highp float;
			precision highp sampler2D;
			varying vec2 vUv;
			uniform sampler2D uTarget;
			uniform float aspectRatio;
			uniform vec3 color;
			uniform vec2 point;
			uniform float radius;
			void main () {
				vec2 p = vUv - point.xy;
				p.x *= aspectRatio;
				float falloff = exp(-dot(p, p) / radius);
				vec3 splat = falloff * color;
				vec3 base = texture2D(uTarget, vUv).xyz;
				gl_FragColor = vec4(base + splat, 1.0);
			}
		`
		);

		const advectionShader = createProgram(
			baseVertexShader,
			`
			precision highp float;
			precision highp sampler2D;
			varying vec2 vUv;
			uniform sampler2D uVelocity;
			uniform sampler2D uSource;
			uniform vec2 texelSize;
			uniform float dt;
			uniform float dissipation;
			void main () {
				vec2 vel = texture2D(uVelocity, vUv).xy;
				vec2 coord = vUv - dt * vel * texelSize;
				vec4 result = texture2D(uSource, clamp(coord, vec2(0.0), vec2(1.0)));
				float decay = 1.0 + dissipation * dt;
				gl_FragColor = result / decay;
			}
		`
		);

		const divergenceShader = createProgram(
			baseVertexShader,
			`
			precision mediump float;
			precision mediump sampler2D;
			varying highp vec2 vUv;
			varying highp vec2 vL;
			varying highp vec2 vR;
			varying highp vec2 vT;
			varying highp vec2 vB;
			uniform sampler2D uVelocity;
			void main () {
				float L = texture2D(uVelocity, vL).x;
				float R = texture2D(uVelocity, vR).x;
				float T = texture2D(uVelocity, vT).y;
				float B = texture2D(uVelocity, vB).y;
				vec2 C = texture2D(uVelocity, vUv).xy;
				if (vL.x < 0.0) { L = -C.x; }
				if (vR.x > 1.0) { R = -C.x; }
				if (vT.y > 1.0) { T = -C.y; }
				if (vB.y < 0.0) { B = -C.y; }
				float div = 0.5 * (R - L + T - B);
				gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
			}
		`
		);

		const curlShader = createProgram(
			baseVertexShader,
			`
			precision mediump float;
			precision mediump sampler2D;
			varying highp vec2 vUv;
			varying highp vec2 vL;
			varying highp vec2 vR;
			varying highp vec2 vT;
			varying highp vec2 vB;
			uniform sampler2D uVelocity;
			void main () {
				float L = texture2D(uVelocity, vL).y;
				float R = texture2D(uVelocity, vR).y;
				float T = texture2D(uVelocity, vT).x;
				float B = texture2D(uVelocity, vB).x;
				float vorticity = R - L - T + B;
				gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
			}
		`
		);

		const vorticityShader = createProgram(
			baseVertexShader,
			`
			precision highp float;
			precision highp sampler2D;
			varying vec2 vUv;
			varying vec2 vL;
			varying vec2 vR;
			varying vec2 vT;
			varying vec2 vB;
			uniform sampler2D uVelocity;
			uniform sampler2D uCurl;
			uniform float curl;
			uniform float dt;
			void main () {
				float L = texture2D(uCurl, vL).x;
				float R = texture2D(uCurl, vR).x;
				float T = texture2D(uCurl, vT).x;
				float B = texture2D(uCurl, vB).x;
				float C = texture2D(uCurl, vUv).x;
				vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
				force /= length(force) + 0.0001;
				force *= curl * C;
				force.y *= -1.0;
				vec2 velocity = texture2D(uVelocity, vUv).xy;
				velocity += force * dt;
				velocity = min(max(velocity, -1200.0), 1200.0);
				gl_FragColor = vec4(velocity, 0.0, 1.0);
			}
		`
		);

		const pressureShader = createProgram(
			baseVertexShader,
			`
			precision mediump float;
			precision mediump sampler2D;
			varying highp vec2 vUv;
			varying highp vec2 vL;
			varying highp vec2 vR;
			varying highp vec2 vT;
			varying highp vec2 vB;
			uniform sampler2D uPressure;
			uniform sampler2D uDivergence;
			void main () {
				float L = texture2D(uPressure, vL).x;
				float R = texture2D(uPressure, vR).x;
				float T = texture2D(uPressure, vT).x;
				float B = texture2D(uPressure, vB).x;
				float divergence = texture2D(uDivergence, vUv).x;
				float pressure = (L + R + B + T - divergence) * 0.25;
				gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
			}
		`
		);

		const gradientSubtractShader = createProgram(
			baseVertexShader,
			`
			precision mediump float;
			precision mediump sampler2D;
			varying highp vec2 vUv;
			varying highp vec2 vL;
			varying highp vec2 vR;
			varying highp vec2 vT;
			varying highp vec2 vB;
			uniform sampler2D uPressure;
			uniform sampler2D uVelocity;
			void main () {
				float L = texture2D(uPressure, vL).x;
				float R = texture2D(uPressure, vR).x;
				float T = texture2D(uPressure, vT).x;
				float B = texture2D(uPressure, vB).x;
				vec2 velocity = texture2D(uVelocity, vUv).xy;
				velocity.xy -= vec2(R - L, T - B);
				gl_FragColor = vec4(velocity, 0.0, 1.0);
			}
		`
		);

		const clearShader = createProgram(
			baseVertexShader,
			`
			precision mediump float;
			precision mediump sampler2D;
			varying highp vec2 vUv;
			uniform sampler2D uTexture;
			uniform float value;
			void main () {
				gl_FragColor = value * texture2D(uTexture, vUv);
			}
		`
		);

		// Monochromatic WebGL2 ink look (#010101 core ink, #7A7A78 mid-tone eddies, #E0E0D7 highlight edge)
		const displayShader = createProgram(
			baseVertexShader,
			`
			precision highp float;
			precision highp sampler2D;
			varying vec2 vUv;
			uniform sampler2D uTexture;
			uniform vec2 texelSize;
			void main () {
				float ink = texture2D(uTexture, vUv).r;
				if (ink < 0.004) {
					gl_FragColor = vec4(0.0);
					return;
				}

				float inkL = texture2D(uTexture, vUv - vec2(texelSize.x * 2.0, 0.0)).r;
				float inkR = texture2D(uTexture, vUv + vec2(texelSize.x * 2.0, 0.0)).r;
				float inkT = texture2D(uTexture, vUv + vec2(0.0, texelSize.y * 2.0)).r;
				float inkB = texture2D(uTexture, vUv - vec2(0.0, texelSize.y * 2.0)).r;

				float edge = abs(inkR - inkL) + abs(inkT - inkB);
				float coreMask = smoothstep(0.06, 0.65, ink);
				float wispMask = smoothstep(0.004, 0.25, ink);

				vec3 paperEdge = vec3(0.878, 0.878, 0.843); // #E0E0D7
				vec3 midInk = vec3(0.38, 0.38, 0.384);     // #616162
				vec3 deepInk = vec3(0.004, 0.004, 0.004);  // #010101

				vec3 col = mix(midInk, deepInk, coreMask);
				col = mix(col, paperEdge, clamp(edge * 0.65, 0.0, 0.35));

				float alpha = clamp(wispMask * 0.78, 0.0, 0.85);
				gl_FragColor = vec4(col * alpha, alpha);
			}
		`
		);

		type FBO = {
			texture: WebGLTexture;
			fbo: WebGLFramebuffer;
			width: number;
			height: number;
			texelSizeX: number;
			texelSizeY: number;
			attach: (id: number) => number;
		};

		type DoubleFBO = {
			width: number;
			height: number;
			texelSizeX: number;
			texelSizeY: number;
			read: FBO;
			write: FBO;
			swap: () => void;
		};

		const createFBO = (
			w: number,
			h: number,
			internalFormat: number,
			format: number,
			type: number,
			param: number
		): FBO => {
			gl!.activeTexture(gl!.TEXTURE0);
			const texture = gl!.createTexture()!;
			gl!.bindTexture(gl!.TEXTURE_2D, texture);
			gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, param);
			gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, param);
			gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
			gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
			gl!.texImage2D(gl!.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

			const fbo = gl!.createFramebuffer()!;
			gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
			gl!.framebufferTexture2D(
				gl!.FRAMEBUFFER,
				gl!.COLOR_ATTACHMENT0,
				gl!.TEXTURE_2D,
				texture,
				0
			);
			gl!.viewport(0, 0, w, h);
			gl!.clear(gl!.COLOR_BUFFER_BIT);

			return {
				texture,
				fbo,
				width: w,
				height: h,
				texelSizeX: 1.0 / w,
				texelSizeY: 1.0 / h,
				attach(id: number) {
					gl!.activeTexture(gl!.TEXTURE0 + id);
					gl!.bindTexture(gl!.TEXTURE_2D, texture);
					return id;
				},
			};
		};

		const createDoubleFBO = (
			w: number,
			h: number,
			internalFormat: number,
			format: number,
			type: number,
			param: number
		): DoubleFBO => {
			let fbo1 = createFBO(w, h, internalFormat, format, type, param);
			let fbo2 = createFBO(w, h, internalFormat, format, type, param);
			return {
				width: w,
				height: h,
				texelSizeX: fbo1.texelSizeX,
				texelSizeY: fbo1.texelSizeY,
				get read() {
					return fbo1;
				},
				set read(val) {
					fbo1 = val;
				},
				get write() {
					return fbo2;
				},
				set write(val) {
					fbo2 = val;
				},
				swap() {
					const temp = fbo1;
					fbo1 = fbo2;
					fbo2 = temp;
				},
			};
		};

		const blit = (target: FBO | null) => {
			if (!target) {
				gl!.viewport(0, 0, gl!.drawingBufferWidth, gl!.drawingBufferHeight);
				gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
			} else {
				gl!.viewport(0, 0, target.width, target.height);
				gl!.bindFramebuffer(gl!.FRAMEBUFFER, target.fbo);
			}
			gl!.bindBuffer(gl!.ARRAY_BUFFER, quadBuffer);
			gl!.vertexAttribPointer(0, 2, gl!.FLOAT, false, 0, 0);
			gl!.enableVertexAttribArray(0);
			gl!.bindBuffer(gl!.ELEMENT_ARRAY_BUFFER, indexBuffer);
			gl!.drawElements(gl!.TRIANGLES, 6, gl!.UNSIGNED_SHORT, 0);
		};

		const SIM_RES = 160;
		const DYE_RES = 640;

		let velocity: DoubleFBO;
		let dye: DoubleFBO;
		let divergence: FBO;
		let curl: FBO;
		let pressure: DoubleFBO;

		const initFBOs = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.max(1, Math.floor(rect.width * dpr));
			canvas.height = Math.max(1, Math.floor(rect.height * dpr));

			const aspect = canvas.width / Math.max(canvas.height, 1);
			const simW = aspect >= 1 ? Math.round(SIM_RES * aspect) : SIM_RES;
			const simH = aspect >= 1 ? SIM_RES : Math.round(SIM_RES / aspect);
			const dyeW = aspect >= 1 ? Math.round(DYE_RES * aspect) : DYE_RES;
			const dyeH = aspect >= 1 ? DYE_RES : Math.round(DYE_RES / aspect);

			velocity = createDoubleFBO(
				simW,
				simH,
				rgFormat.internalFormat,
				rgFormat.format,
				halfFloatTexType,
				filtering
			);
			dye = createDoubleFBO(
				dyeW,
				dyeH,
				rgbaFormat.internalFormat,
				rgbaFormat.format,
				halfFloatTexType,
				filtering
			);
			divergence = createFBO(
				simW,
				simH,
				rFormat.internalFormat,
				rFormat.format,
				halfFloatTexType,
				gl!.NEAREST
			);
			curl = createFBO(
				simW,
				simH,
				rFormat.internalFormat,
				rFormat.format,
				halfFloatTexType,
				gl!.NEAREST
			);
			pressure = createDoubleFBO(
				simW,
				simH,
				rFormat.internalFormat,
				rFormat.format,
				halfFloatTexType,
				gl!.NEAREST
			);
		};

		initFBOs();

		const splat = (
			x: number,
			y: number,
			dx: number,
			dy: number,
			inkAmount: number,
			radius = 0.0095
		) => {
			const aspectRatio = canvas.width / Math.max(canvas.height, 1);

			gl!.useProgram(splatShader);
			gl!.uniform1i(gl!.getUniformLocation(splatShader, "uTarget"), velocity.read.attach(0));
			gl!.uniform1f(gl!.getUniformLocation(splatShader, "aspectRatio"), aspectRatio);
			gl!.uniform2f(gl!.getUniformLocation(splatShader, "point"), x, y);
			gl!.uniform3f(gl!.getUniformLocation(splatShader, "color"), dx, dy, 0.0);
			gl!.uniform1f(gl!.getUniformLocation(splatShader, "radius"), radius);
			blit(velocity.write);
			velocity.swap();

			gl!.uniform1i(gl!.getUniformLocation(splatShader, "uTarget"), dye.read.attach(0));
			gl!.uniform3f(gl!.getUniformLocation(splatShader, "color"), inkAmount, inkAmount, inkAmount);
			gl!.uniform1f(gl!.getUniformLocation(splatShader, "radius"), radius * 1.45);
			blit(dye.write);
			dye.swap();
		};

		const emitFullHeightWaveAtX = (
			x: number,
			stepDx: number,
			inkAmount: number,
			phase: number,
			seed: number
		) => {
			const yBands = [0.05, 0.22, 0.40, 0.58, 0.76, 0.95];
			yBands.forEach((baseY, idx) => {
				const jitterY = Math.sin(phase * Math.PI * 3.0 + idx * 1.65 + seed) * 0.085;
				const y = Math.max(0.01, Math.min(0.99, baseY + jitterY));
				const swirlDy = Math.cos(phase * Math.PI * 2.5 + idx * 1.9 + seed) * 560;
				const pushDx = stepDx + Math.sin(phase * Math.PI * 2.0 + idx) * 200;
				splat(x, y, pushDx, swirlDy, inkAmount, 0.0095);
			});
		};

		let lastScrollProgress = progressRef.current;
		let lastTime = performance.now();
		let rafId = 0;

		const resizeObserver = new ResizeObserver(() => {
			initFBOs();
		});
		resizeObserver.observe(canvas);

		const step = (now: number) => {
			const dt = Math.min((now - lastTime) / 1000, 0.0167);
			lastTime = now;

			const currentScroll = progressRef.current;
			const scrollDelta = Math.abs(currentScroll - lastScrollProgress);
			lastScrollProgress = currentScroll;

			if (isSweepingRef.current) {
				const scrollDrivenAdvance = scrollDelta * 6.5;
				const minAdvance = dt * 0.75;
				const nextSweep = Math.min(
					1,
					sweepProgressRef.current + Math.max(scrollDrivenAdvance, minAdvance)
				);

				const fromX = lastSweepXRef.current;
				const toX = nextSweep;
				const subSteps = Math.min(12, Math.max(1, Math.ceil((toX - fromX) * 36)));
				const seed = sweepSeedRef.current;

				for (let i = 1; i <= subSteps; i++) {
					const t = fromX + ((toX - fromX) * i) / subSteps;
					const stepDx = Math.max(750, ((toX - fromX) / subSteps) * 25000);
					emitFullHeightWaveAtX(t, stepDx, 1.45, t, seed);
				}

				lastSweepXRef.current = toX;
				sweepProgressRef.current = nextSweep;
				onSweepUpdate?.(nextSweep, nextSweep < 1);

				if (nextSweep >= 1) {
					isSweepingRef.current = false;
					sweepProgressRef.current = 0;
					onSweepUpdate?.(1, false);
				}
			}

			gl!.disable(gl!.BLEND);

			// 1. Curl
			gl!.useProgram(curlShader);
			gl!.uniform2f(gl!.getUniformLocation(curlShader, "texelSize"), velocity.texelSizeX, velocity.texelSizeY);
			gl!.uniform1i(gl!.getUniformLocation(curlShader, "uVelocity"), velocity.read.attach(0));
			blit(curl);

			// 2. Vorticity confinement
			gl!.useProgram(vorticityShader);
			gl!.uniform2f(gl!.getUniformLocation(vorticityShader, "texelSize"), velocity.texelSizeX, velocity.texelSizeY);
			gl!.uniform1i(gl!.getUniformLocation(vorticityShader, "uVelocity"), velocity.read.attach(0));
			gl!.uniform1i(gl!.getUniformLocation(vorticityShader, "uCurl"), curl.attach(1));
			gl!.uniform1f(gl!.getUniformLocation(vorticityShader, "curl"), 36.0);
			gl!.uniform1f(gl!.getUniformLocation(vorticityShader, "dt"), dt);
			blit(velocity.write);
			velocity.swap();

			// 3. Divergence
			gl!.useProgram(divergenceShader);
			gl!.uniform2f(gl!.getUniformLocation(divergenceShader, "texelSize"), velocity.texelSizeX, velocity.texelSizeY);
			gl!.uniform1i(gl!.getUniformLocation(divergenceShader, "uVelocity"), velocity.read.attach(0));
			blit(divergence);

			// 4. Pressure
			gl!.useProgram(clearShader);
			gl!.uniform1i(gl!.getUniformLocation(clearShader, "uTexture"), pressure.read.attach(0));
			gl!.uniform1f(gl!.getUniformLocation(clearShader, "value"), 0.82);
			blit(pressure.write);
			pressure.swap();

			gl!.useProgram(pressureShader);
			gl!.uniform2f(gl!.getUniformLocation(pressureShader, "texelSize"), velocity.texelSizeX, velocity.texelSizeY);
			gl!.uniform1i(gl!.getUniformLocation(pressureShader, "uDivergence"), divergence.attach(0));
			for (let i = 0; i < 22; i++) {
				gl!.uniform1i(gl!.getUniformLocation(pressureShader, "uPressure"), pressure.read.attach(1));
				blit(pressure.write);
				pressure.swap();
			}

			// 5. Gradient subtract
			gl!.useProgram(gradientSubtractShader);
			gl!.uniform2f(gl!.getUniformLocation(gradientSubtractShader, "texelSize"), velocity.texelSizeX, velocity.texelSizeY);
			gl!.uniform1i(gl!.getUniformLocation(gradientSubtractShader, "uPressure"), pressure.read.attach(0));
			gl!.uniform1i(gl!.getUniformLocation(gradientSubtractShader, "uVelocity"), velocity.read.attach(1));
			blit(velocity.write);
			velocity.swap();

			// 6. Advect velocity
			gl!.useProgram(advectionShader);
			gl!.uniform2f(gl!.getUniformLocation(advectionShader, "texelSize"), velocity.texelSizeX, velocity.texelSizeY);
			const velId = velocity.read.attach(0);
			gl!.uniform1i(gl!.getUniformLocation(advectionShader, "uVelocity"), velId);
			gl!.uniform1i(gl!.getUniformLocation(advectionShader, "uSource"), velId);
			gl!.uniform1f(gl!.getUniformLocation(advectionShader, "dt"), dt);
			gl!.uniform1f(gl!.getUniformLocation(advectionShader, "dissipation"), 0.85);
			blit(velocity.write);
			velocity.swap();

			// 7. Advect ink
			gl!.uniform1i(gl!.getUniformLocation(advectionShader, "uVelocity"), velocity.read.attach(0));
			gl!.uniform1i(gl!.getUniformLocation(advectionShader, "uSource"), dye.read.attach(1));
			gl!.uniform1f(gl!.getUniformLocation(advectionShader, "dissipation"), 0.45);
			blit(dye.write);
			dye.swap();

			// 8. Display
			gl!.useProgram(displayShader);
			gl!.uniform2f(gl!.getUniformLocation(displayShader, "texelSize"), dye.texelSizeX, dye.texelSizeY);
			gl!.uniform1i(gl!.getUniformLocation(displayShader, "uTexture"), dye.read.attach(0));
			blit(null);

			rafId = requestAnimationFrame(step);
		};

		rafId = requestAnimationFrame(step);

		return () => {
			cancelAnimationFrame(rafId);
			resizeObserver.disconnect();
		};
	}, [progressRef, onSweepUpdate]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className="pointer-events-none absolute inset-0 z-0 h-full w-full block"
		/>
	);
};

export default FluidInkOverlay;