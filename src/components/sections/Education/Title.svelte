<script>
	import MarqueeTextWidget from 'svelte-marquee-text-widget';
</script>

<div>
	<div class="bg-white border-t-2 border-black p-2">
		<MarqueeTextWidget repeat={50} duration={2}>
			<p class="px-4 text-4xl font-mono font-bold text-black">EDUCATION</p>
		</MarqueeTextWidget>
	</div>
	<div class="bg-black border-b-2 border-white p-2">
		<MarqueeTextWidget repeat={10} duration={3}>
			<p class="px-4 text-4xl font-mono font-bold text-white">WHAT HAVE I STUDIED?</p>
		</MarqueeTextWidget>
	</div>
</div>
