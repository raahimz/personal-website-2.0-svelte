<script>
	import Course from './Course.svelte';
	import Title from './Title.svelte';
	import BgParticles from './BgParticles.svelte';
</script>

<section class="">
	<Title />
	<div class="bg-white p-4 flex flex-col gap-2 relative">
		<div class="absolute inset-0 z-0">
			<BgParticles />
		</div>
		<div class="flex flex-row justify-center ml-auto mr-auto gap-1 z-10 w-fit">
			<div class="p-4">
				<Course />
			</div>
		</div>
	</div>
</section>
