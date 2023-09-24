<script>
	import Title from './Title.svelte';
	import SkillCard from './SkillCard.svelte';
	import SkillBar from './SkillBar.svelte';
	import { blur } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	let skillsRow1;
	let skillsRow2;
</script>

<section class="">
	<Title />

	<div class="bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 p-4 flex flex-col gap-2">
		<div
			use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
			on:change={({ detail }) => {
				skillsRow1 = detail.inView;
			}}
		>
			{#if skillsRow1}
				<div in:blur class="">
					<div
						class="flex flex-col md:flex-row gap-2 justify-center items-center"
						style="opacity: {$skillsRow1};"
					>
						<SkillCard title="app dev">
							<SkillBar title="flutter" percentage={100} />
							<SkillBar title="firebase" percentage={80} />
							<SkillBar title="provider" percentage={80} />
						</SkillCard>
						<SkillCard title="front end">
							<SkillBar title="Svelte Js" percentage={100} />
							<SkillBar title="Tailwind CSS" percentage={100} />
							<SkillBar title="Next Js" percentage={80} />
						</SkillCard>
						<SkillCard title="back end">
							<SkillBar title="Express JS" percentage={100} />
							<SkillBar title="Mongo DB" percentage={80} />
							<SkillBar title="Flask" percentage={80} />
						</SkillCard>
					</div>
				</div>
			{/if}
		</div>
		<div
			use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
			on:change={({ detail }) => {
				skillsRow2 = detail.inView;
			}}
		>
			{#if skillsRow2}
				<div in:blur class="">
					<div
						class="flex flex-col md:flex-row gap-2 justify-center items-center"
						style="opacity: {$skillsRow2};"
					>
						<SkillCard title="languages">
							<SkillBar title="Python" percentage={100} />
							<SkillBar title="Javascript" percentage={100} />
							<SkillBar title="Rust" percentage={80} />
						</SkillCard>
						<SkillCard title="unit testing">
							<SkillBar title="Jest" percentage={100} />
							<SkillBar title="Rust unit tests" percentage={100} />
							<SkillBar title="Pactum" percentage={50} />
						</SkillCard>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
