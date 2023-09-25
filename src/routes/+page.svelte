<script>
	import Parallax from '../components/Parallax.svelte';
	import Intro from '../components/sections/Intro/Intro.svelte';
	import Top from '../components/sections/Top/Top.svelte';
	import SocialsBar from '../components/sections/SocialsBar/SocialsBar.svelte';
	import Education from '../components/sections/Education/Education.svelte';
	import Skills from '../components/sections/Skills/Skills.svelte';
	import Experience from '../components/sections/Experience/Experience.svelte';
	import Credits from '../components/Credits.svelte';
	// import BgParticles from '../components/sections/Skills/BgParticles.svelte';

	// SECTIONS
	// name | DONE
	// socials | DONE
	// intro | DONE
	// education | DONE
	// skills | DONE
	// experience
	// projects
	// what i love!
</script>

<main>
	<div class="px-9 pt-9">
		<Top />
	</div>
	<div class="bottom-0 absolute w-full">
		<SocialsBar />
	</div>
	<div class="mt-[85vh]">
		<Intro />
	</div>
	<Skills />
	<Experience />
	<Education />
	<Credits />
</main>
