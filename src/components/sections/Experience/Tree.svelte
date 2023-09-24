<script>
	const experiences = [
		{
			title: 'Internship @ Barbarians LLC',
			roles: [
				'Coding unit tests (Rust/Typescript)',
				'Developing mobile applications with Flutter',
				'Developing features for web applications (React/Next)',
				'Implemented image segmentation with Mediapipe for Google Meet-like web-cam filters'
			],
			skills: [
				'React JS',
				'Flutter',
				'Svelte',
				'Jest',
				'Typescript',
				'Pactum JS',
				'Rest API',
				'Express JS',
				'Rust'
			],
			date: 'July 2022 - Now',
			current: true
		},
		{
			title: 'Independant Contractor @ Promohands',
			roles: [
				'Fetch large data from using an API',
				'Sort, filter, format, rank and manipulate data',
				'Upload ranked data to a database'
			],
			skills: ['Python', 'Data Handling', 'Rest API', 'CSV'],
			date: 'June 2021',
			current: false
		},
		{
			title: 'Independant Contractor @ Eyewatch',
			roles: ['Developed augmented reality filters for Instagram'],
			skills: ['Spark AR', 'Augmented Reality'],
			date: 'January 2019',
			current: false
		}
	];
</script>

<div class="sm:ml-20 ml-16 flex justify-center font-handlee">
	<ol class="relative border-l border-purple-400">
		{#each experiences as exp, index}
			<li class="mb-10 ml-6">
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-200 rounded-full ring-8 ring-white"
				>
					<svg
						class="w-8 h-8 text-purple-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
				<h3 class="flex items-center mb-1 text-2xl font-semibold text-black">
					{exp.title}
					{#if exp.current}
						<span
							class="bg-purple-200 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3"
							>Current</span
						>
					{/if}
				</h3>
				<time class="block mb-2 text-sm font-semibold leading-none text-gray-700">{exp.date}</time>
				<div class="mb-4 text-2xl text-black">
					{#each exp.roles as role, index}
						<p>• {role}</p>
					{/each}
				</div>
				<div class="max-w-[40ch]">
					{#each exp.skills as skill, index}
						<span
							class="bg-purple-200 text-black text-md font-medium mr-1 mt-1 px-2.5 py-0.5 rounded inline-block"
							>{skill}</span
						>
					{/each}
				</div>
			</li>
		{/each}
		<span class="bg-purple-100 text-purple-800 text-lg font-medium mr-2 px-2.5 py-0.5 rounded ml-3"
			>Start ✈️</span
		>
	</ol>
</div>
