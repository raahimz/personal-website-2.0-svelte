<script>
	export let title;
</script>

<div class="bg-teal-300 rounded-md shadow-md shadow-teal-800 w-fit p-2 flex flex-col gap-2">
	<div class="bg-teal-950 rounded-md py-1 px-3 shadow-black shadow-sm border-2 border-teal-900">
		<h1 class="text-2xl font-mono text-center font-bold text-teal-300">{title.toUpperCase()}</h1>
	</div>
	<slot />
</div>
