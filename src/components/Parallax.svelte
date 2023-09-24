<script>
	import { onMount } from 'svelte';

	let x = 0;
	let y = 0;

	onMount(() => {
		const handleMouseMove = (event) => {
			const { clientX, clientY } = event;
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight / 2;

			x = (clientX - centerX) * 0.01; // adjust the multiplier for stronger/weaker effect
			y = (clientY - centerY) * 0.01;
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div class="relative" style="transform: translate({x}px, {y}px);">
	<slot />
</div>
