<script>
	import '../app.css';

	import Cube from '../components/Cube.svelte';
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Raahim Zee</title>
	<meta name="description" content="This page is the personal website of Raahim Zee" />
</svelte:head>

<main class="">
	<slot />
	<Cube />
</main>
