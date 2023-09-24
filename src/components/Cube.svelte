<script>
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import * as THREE from 'three';

	let scene, camera, renderer, sphereGroup;
	let mouseX = 0,
		mouseY = 0;
	let smallSpheres = [];
	let time = 0;

	let isClient = false;

	onMount(() => {
		isClient = true;
	});

	afterUpdate(() => {
		if (!isClient) return;

		// Create a scene
		scene = new THREE.Scene();

		// Create a camera
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 5;

		// Create a renderer
		renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		const container = document.getElementById('cube-container');
		container.appendChild(renderer.domElement);

		// Create a group to hold the smaller spheres
		sphereGroup = new THREE.Group();
		scene.add(sphereGroup);

		// Create a material for smaller spheres (black/grey color)
		const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0000 });

		// Create and position smaller spheres
		const radius = 1.8;
		const threshold = 0.1;

		for (let x = -2; x <= 2; x += 0.2) {
			for (let y = -2; y <= 2; y += 0.2) {
				for (let z = -2; z <= 2; z += 0.2) {
					const distanceFromCenter = Math.sqrt(x * x + y * y + z * z);

					if (Math.abs(distanceFromCenter - radius) <= threshold) {
						const geometry = new THREE.SphereGeometry(0.05, 16, 16); // Changed to SphereGeometry
						const smallSphere = new THREE.Mesh(geometry, basicMaterial);
						smallSphere.position.set(x, y, z);
						smallSphere.userData.phase = Math.random() * Math.PI * 2;
						smallSpheres.push(smallSphere);
						sphereGroup.add(smallSphere);
					}
				}
			}
		}

		window.addEventListener('mousemove', (event) => {
			mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
		});

		function animate() {
			requestAnimationFrame(animate);

			sphereGroup.rotation.x += 0.0005 + mouseY * 0.01;
			sphereGroup.rotation.y += 0.0005 + mouseX * 0.01;

			smallSpheres.forEach((sphere) => {
				sphere.position.x += 0.001 * Math.sin(time + sphere.userData.phase);
				sphere.rotation.y += 0.005;
				sphere.position.y += 0.001 * Math.sin(time + sphere.userData.phase);
			});

			time += 0.01;

			renderer.render(scene, camera);
		}

		animate();
	});

	onDestroy(() => {
		if (isClient) {
			// Cleanup code if needed
		}
	});
</script>

<div id="cube-container" />

<style>
	#cube-container {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		pointer-events: none;
	}
</style>
