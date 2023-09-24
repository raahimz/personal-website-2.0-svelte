<script>
	export let title;
	export let percentage;
</script>

<div class="bg-teal-400 p-2 border-2 border-teal-300 rounded-md shadow-teal-700 shadow-sm">
	<div class="font-mono font-normal text-teal-950 text-lg text-center">
		{title.toUpperCase()}
	</div>
	<div class="md:w-52 w-72 bg-teal-50 border-2 border-teal-500 rounded-full">
		<div
			class="h-4 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full border-2 shadow-sm shadow-teal-500 border-teal-50"
			style="width: {percentage}%;"
		/>
	</div>
</div>
