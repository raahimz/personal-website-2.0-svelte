<script>
	import Tree from './Tree.svelte';
	import { fade, slide } from 'svelte/transition';
	import { inview } from 'svelte-inview';
</script>

<section class="p-4 bg">
	<h1
		in:fade
		class="text-5xl text-center font-bold text-blacks font-handlee bg-purple-300 bg-opacity-70 w-fit ml-auto mr-auto px-2"
	>
		Experiences
	</h1>
	<div in:fade class=" p-4 flex flex-col gap-2">
		<Tree />
	</div>
</section>

<style>
	.bg {
		background-color: #e5e5f7;
		opacity: 1;
		background-image: linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
			linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, #e5e5f7 1px);
		background-size: 50px 50px; /* Increased size for less frequent lines */
	}
</style>
