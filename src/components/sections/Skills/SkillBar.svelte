<script>
	export let title;
	export let percentage;
</script>

<div class="bg-white p-2 border-2 border-gray-300 rounded-md shadow-gray-700 shadow-sm">
	<div class="font-mono font-normal text-black text-lg text-center">
		{title.toUpperCase()}
	</div>
	<div class="md:w-52 w-72 bg-gray-200 border-2 border-gray-300 rounded-full">
		<div
			class="h-4 bg-gradient-to-r from-gray-800 to-gray-500 rounded-full border-2 shadow-sm shadow-gray-500 border-gray-100"
			style="width: {percentage}%;"
		/>
	</div>
</div>
