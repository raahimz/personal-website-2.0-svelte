<script>
	import InfoBlock from './InfoBlock.svelte';
	import { slide } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let block1;
	let block2;
	let block3;
</script>

<section class="lens p-9 text-black flex flex-col gap-6">
	<h1
		class="text-5xl font-mono lens-text w-44 text-center self-center text-white bg-black rounded-md p-2 ml-auto mr-auto bg-opacity-95 border-[1px] border-white shadow-md shadow-[#ffffff27]"
	>
		Heya!
	</h1>

	<div class="flex flex-col gap-4 self-center">
		<div
			use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
			on:change={({ detail }) => {
				block1 = detail.inView;
			}}
		>
			{#if block1}
				<div in:slide class="md:mr-16">
					<InfoBlock>
						From my early days of childhood curiosity with computers, I knew I was embarking on a
						lifelong journey in technology. This initial fascination has evolved into a deep-rooted
						passion for all things tech. Whether it's web development, app creation, or cloud
						computing, my skill set is as diverse as it is specialized, making me a versatile asset
						in any technological endeavor.
					</InfoBlock>
				</div>
			{/if}
		</div>
		<div
			use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
			on:change={({ detail }) => {
				block2 = detail.inView;
			}}
		>
			{#if block2}
				<div in:slide class="md:ml-16">
					<InfoBlock>
						Beyond the technical skills, what sets me apart is my analytical mindset coupled with a
						strong sense of responsibility. These traits ensure that I approach each project with a
						meticulous eye for detail, delivering solutions that are not only effective but also
						reliable. My analytical prowess allows me to tackle complex challenges with precision,
						making me a dependable problem solver in high-stakes situations.
					</InfoBlock>
				</div>
			{/if}
		</div>
		<div
			use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
			on:change={({ detail }) => {
				block3 = detail.inView;
			}}
		>
			{#if block3}
				<div in:slide class="md:mr-16">
					<InfoBlock>
						However, I'm not just about code and numbers. My creative spirit is an integral part of
						who I am, driving me to think outside the box and innovate. This creativity, combined
						with my technical skills, makes me not just a Programmer or a Tech Enthusiast, but an
						Inquisitive Explorer. I thrive on pushing the boundaries of what's possible, continually
						seeking to expand my horizons in the ever-evolving tech landscape.
					</InfoBlock>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.lens {
		-webkit-backdrop-filter: invert(100%);
		backdrop-filter: invert(100%);
		/* backdrop-filter: blur(5px); */
		/* backdrop-filter: hue-rotate(90deg); */
	}
</style>
