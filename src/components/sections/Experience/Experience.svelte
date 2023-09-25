<script>
	import BgParticles from './BgParticles.svelte';
	import Title from './Title.svelte';
	import Tree from './Tree.svelte';
</script>

<section class="">
	<Title />
	<div class="relative p-4 bg-black">
		<div class="absolute inset-0 z-0">
			<BgParticles />
		</div>
		<div class="z-10 p-4 flex flex-col gap-2">
			<Tree />
		</div>
	</div>
</section>
