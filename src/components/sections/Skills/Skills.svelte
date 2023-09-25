<script>
	import Title from './Title.svelte';
	import SkillCard from './SkillCard.svelte';
	import SkillBar from './SkillBar.svelte';
	import BgParticles from './BgParticles.svelte';
</script>

<section class="">
	<Title />
	<div class="bg-white p-4 flex flex-col gap-2 relative">
		<div class="absolute inset-0 z-0">
			<BgParticles />
		</div>
		<div
			class="flex flex-col md:flex-row gap-2 justify-center items-center z-10 w-min mr-auto ml-auto"
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

		<div
			class="flex flex-col md:flex-row gap-2 justify-center items-center z-10 w-min mr-auto ml-auto"
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
</section>
