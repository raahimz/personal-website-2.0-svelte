<script>
	export let title;
</script>

<div
	class="bg-black rounded-md shadow-md shadow-gray-800 w-fit p-2 flex flex-col gap-2 border-2 border-gray-300"
>
	<div class="bg-white rounded-md py-1 px-3 shadow-black shadow-sm border-2 border-gray-300">
		<h1 class="text-2xl font-mono text-center font-bold text-black">{title.toUpperCase()}</h1>
	</div>
	<slot />
</div>
