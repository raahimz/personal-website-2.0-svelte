<script>
	import { onMount } from 'svelte';

	let title = 'Raahim Zee';
	const originalTitle = 'Raahim Zee';
	let spans = [];

	const titleLetterSubstitution = {
		R: 'Ř',
		a: 'ä',
		h: 'ḫ',
		i: 'ī',
		m: 'ɱ',
		Z: 'Ƶ',
		e: 'ẹ̀'
	};

	onMount(() => {
		setTimeout(() => {
			setInterval(function () {
				// Reset the title to its original state
				for (let i = 0; i < originalTitle.length; i++) {
					spans[i].textContent = originalTitle[i];
				}

				const randomTitleIndex = Math.floor(Math.random() * title.length);
				const charAtRandomIndex = title[randomTitleIndex];
				const letterSubstitution = titleLetterSubstitution[charAtRandomIndex];

				if (letterSubstitution) {
					spans[randomTitleIndex].textContent = letterSubstitution;
				}
			}, 250);
		}, 0);
	});
</script>

<h1 class="font-mono text-6xl flex flex-row">
	{#each Array.from(title) as letter, index}
		<span class="letter" bind:this={spans[index]}>{letter}</span>
	{/each}
</h1>

<style>
	.letter {
		display: inline-block;
		width: 1ch;
		text-align: center;
	}
</style>
