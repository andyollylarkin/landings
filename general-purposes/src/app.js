import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.161/build/three.module.js";

const canvas = document.getElementById("scene");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x0a0a1f);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
camera.position.z = 600;

// Создаём треугольные полигоны
const COUNT = 120;
const triangles = [];
const triangleData = [];

for (let i = 0; i < COUNT; i++) {
	const size = Math.random() * 80 + 40;
	const x = (Math.random() - 0.5) * 1200;
	const y = (Math.random() - 0.5) * 1200;
	const z = (Math.random() - 0.5) * 1200;

	const geometry = new THREE.BufferGeometry();
	const vertices = new Float32Array([
		0, size * 0.866, 0,
		-size * 0.5, -size * 0.433, 0,
		size * 0.5, -size * 0.433, 0
	]);
	geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

	// Цвета: голубой или розовый
	const isBlue = Math.random() > 0.5;
	const color = isBlue ? new THREE.Color(0x6c5ce7) : new THREE.Color(0x5b4fff);

	const material = new THREE.MeshBasicMaterial({
		color: color,
		transparent: true,
		opacity: 0.7,
		side: THREE.DoubleSide,
		blending: THREE.AdditiveBlending,
		emissive: color,
		emissiveIntensity: 0.8
	});

	const mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set(
		Math.random() * Math.PI * 2,
		Math.random() * Math.PI * 2,
		Math.random() * Math.PI * 2
	);

	scene.add(mesh);
	triangles.push(mesh);

	triangleData.push({
		basePos: { x, y, z },
		rotSpeed: {
			x: (Math.random() - 0.5) * 0.01,
			y: (Math.random() - 0.5) * 0.01,
			z: (Math.random() - 0.5) * 0.005
		},
		floatSpeed: Math.random() * 0.0005 + 0.0002,
		floatOffset: Math.random() * Math.PI * 2
	});
}

// Создаём светящиеся круглые точки (узлы)
const POINTS_COUNT = 300;
const pointsPositions = new Float32Array(POINTS_COUNT * 3);
const pointsColors = new Float32Array(POINTS_COUNT * 3);
const pointsBase = [];

// Создаём текстуру круга для точек
const canvas2d = document.createElement('canvas');
canvas2d.width = 64;
canvas2d.height = 64;
const ctx = canvas2d.getContext('2d');

// Рисуем градиентный круг с свечением
const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 64, 64);

const texture = new THREE.CanvasTexture(canvas2d);

for (let i = 0; i < POINTS_COUNT; i++) {
	const i3 = i * 3;
	const x = (Math.random() - 0.5) * 1200;
	const y = (Math.random() - 0.5) * 1200;
	const z = (Math.random() - 0.5) * 1200;

	pointsPositions[i3] = x;
	pointsPositions[i3 + 1] = y;
	pointsPositions[i3 + 2] = z;

	pointsBase.push({ x, y, z });

	// Розовый или голубой цвет для точек
	const isBlue = Math.random() > 0.6;
	if (isBlue) {
		pointsColors[i3] = 0.0;
		pointsColors[i3 + 1] = 0.7;
		pointsColors[i3 + 2] = 1.0;
	} else {
		pointsColors[i3] = 1.0;
		pointsColors[i3 + 1] = 0.0;
		pointsColors[i3 + 2] = 0.6;
	}
}

const pointsGeo = new THREE.BufferGeometry();
pointsGeo.setAttribute('position', new THREE.BufferAttribute(pointsPositions, 3));
pointsGeo.setAttribute('color', new THREE.BufferAttribute(pointsColors, 3));

const pointsMaterial = new THREE.PointsMaterial({
	size: 25,
	vertexColors: true,
	transparent: true,
	opacity: 1,
	blending: THREE.AdditiveBlending,
	depthWrite: false,
	map: texture,
	sizeAttenuation: true
});

const points = new THREE.Points(pointsGeo, pointsMaterial);
scene.add(points);

// Создаём соединительные линии
const linesGeo = new THREE.BufferGeometry();
const linePositions = [];
const lineColors = [];
const maxDistance = 250;

function updateLines() {
	linePositions.length = 0;
	lineColors.length = 0;

	const pos = pointsGeo.attributes.position.array;
	const col = pointsGeo.attributes.color.array;

	for (let i = 0; i < POINTS_COUNT; i++) {
		for (let j = i + 1; j < POINTS_COUNT; j++) {
			const i3 = i * 3;
			const j3 = j * 3;

			const dx = pos[i3] - pos[j3];
			const dy = pos[i3 + 1] - pos[j3 + 1];
			const dz = pos[i3 + 2] - pos[j3 + 2];
			const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

			if (dist < maxDistance) {
				linePositions.push(pos[i3], pos[i3 + 1], pos[i3 + 2]);
				linePositions.push(pos[j3], pos[j3 + 1], pos[j3 + 2]);

				lineColors.push(col[i3], col[i3 + 1], col[i3 + 2]);
				lineColors.push(col[j3], col[j3 + 1], col[j3 + 2]);
			}
		}
	}

	linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
	linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
}

const linesMaterial = new THREE.LineBasicMaterial({
	vertexColors: true,
	transparent: true,
	opacity: 0.4,
	blending: THREE.AdditiveBlending
});

const lines = new THREE.LineSegments(linesGeo, linesMaterial);
scene.add(lines);

updateLines();

// Анимация
let frameCount = 0;
function animate(t) {
	requestAnimationFrame(animate);
	frameCount++;

	// Анимация треугольников
	triangles.forEach((triangle, i) => {
		const data = triangleData[i];
		triangle.rotation.x += data.rotSpeed.x;
		triangle.rotation.y += data.rotSpeed.y;
		triangle.rotation.z += data.rotSpeed.z;

		triangle.position.y = data.basePos.y + Math.sin(t * data.floatSpeed + data.floatOffset) * 30;
		triangle.position.x = data.basePos.x + Math.cos(t * data.floatSpeed * 0.7 + data.floatOffset) * 20;
	});

	// Анимация точек
	const pos = pointsGeo.attributes.position.array;
	for (let i = 0; i < POINTS_COUNT; i++) {
		const i3 = i * 3;
		const base = pointsBase[i];
		pos[i3] = base.x + Math.sin(t * 0.0003 + i * 0.1) * 20;
		pos[i3 + 1] = base.y + Math.cos(t * 0.0004 + i * 0.1) * 20;
		pos[i3 + 2] = base.z + Math.sin(t * 0.0002 + i * 0.05) * 15;
	}
	pointsGeo.attributes.position.needsUpdate = true;

	// Обновляем линии каждые несколько кадров для производительности
	if (frameCount % 3 === 0) {
		updateLines();
	}

	// Медленное вращение сцены
	scene.rotation.y = Math.sin(t * 0.0001) * 0.2;
	scene.rotation.x = Math.cos(t * 0.00015) * 0.1;

	renderer.render(scene, camera);
}

animate(0);

// Обработка изменения размера
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});

// Интерактивность при движении мыши
window.addEventListener('mousemove', (e) => {
	const x = (e.clientX / window.innerWidth - 0.5) * 0.3;
	const y = (e.clientY / window.innerHeight - 0.5) * 0.3;
	camera.position.x = x * 200;
	camera.position.y = -y * 200;
	camera.lookAt(scene.position);
});