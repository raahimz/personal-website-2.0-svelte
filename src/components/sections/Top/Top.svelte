<script>
	import RaahimZee from './RaahimZee.svelte';
</script>

<section>
	<div class="h-[2px] bg-black" />
	<div class="h-4" />
	<div class="flex flex-row justify-center md:justify-between">
		<RaahimZee />
		<div class="hidden md:block">
			<p class="font-mono font-normal">Hello from Karachi 👋</p>
		</div>
	</div>
	<div class="block md:hidden bg-black text-white mt-2 px-2 rounded-sm text-center">
		<p class="font-mono font-normal">Hello from Karachi</p>
	</div>
	<div class="py-1 font-mono flex flex-row justify-center gap-2 md:flex-col md:gap-0 md:ml-1">
		<p class="font-normal text-lg underline">Explorer</p>
		<p class="block md:hidden">+</p>
		<p class="font-normal text-lg underline">Programmer</p>
		<p class="block md:hidden">+</p>
		<p class="font-normal text-lg underline">Student</p>
	</div>
</section>
