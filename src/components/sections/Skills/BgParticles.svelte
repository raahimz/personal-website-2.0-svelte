<script>
	import { onMount } from 'svelte';
	//import { loadFull } from "tsparticles2"; // if you are going to use `loadFull`, install the "tsparticles2" package too.
	import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles2-slim" package too.

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('svelte-particles');

		ParticlesComponent = module.default;
	});

	let particlesUrl = 'http://foo.bar/particles.json'; // placeholder, replace it with a real url

	let particlesConfig = {
		fps_limit: 60,
		interactivity: {
			detect_on: 'canvas',
			events: {
				onclick: { enable: true, mode: 'push' },
				onhover: {
					enable: true,
					mode: 'attract',
					parallax: { enable: false, force: 60, smooth: 10 }
				},
				resize: true
			},
			modes: {
				push: { quantity: 4 },
				attract: { distance: 200, duration: 0.4, factor: 5 }
			}
		},
		particles: {
			color: { value: '#000000' },
			line_linked: {
				color: '#000000',
				distance: 150,
				enable: true,
				opacity: 0.4,
				width: 1
			},
			move: {
				attract: { enable: false, rotateX: 600, rotateY: 1200 },
				bounce: false,
				direction: 'none',
				enable: true,
				out_mode: 'out',
				random: false,
				speed: 2,
				straight: false
			},
			number: { density: { enable: true, value_area: 800 }, value: 80 },
			opacity: {
				anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
				random: false,
				value: 0.5
			},
			shape: {
				character: {
					fill: false,
					font: 'Verdana',
					style: '',
					value: '*',
					weight: '400'
				},
				image: {
					height: 100,
					replace_color: true,
					src: 'images/github.svg',
					width: 100
				},
				polygon: { nb_sides: 5 },
				stroke: { color: '#000000', width: 0 },
				type: 'circle'
			},
			size: {
				anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
				random: true,
				value: 5
			}
		},
		polygon: {
			draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
			move: { radius: 10 },
			scale: 1,
			type: 'none',
			url: ''
		},
		retina_detect: true,
		fullScreen: {
			zIndex: -100,
			enable: false // this is the line to change
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	let particlesInit = async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles2 package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(main);
		await loadSlim(engine);
	};
</script>

<div class="w-full h-full">
	<svelte:component
		this={ParticlesComponent}
		id="tsparticles2"
		class="foo bar w-full h-full"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
</div>
