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

<div class=" flex justify-center font-mono">
	<ol class="relative border-l border-white">
		{#each experiences as exp, index}
			<li
				class="mb-10 ml-6 bg-white bg-opacity-100 border-2 border-gray-600 p-2 rounded-md shadow-sm shadow-gray-500"
			>
				<span
					class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-black rounded-full ring-4 ring-white"
				>
					<svg
						class="w-4 h-4 text-white"
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
				<h3
					class="flex items-center mb-1 text-xl font-semibold text-white px-2 py-1 bg-black rounded-md border-[1px] border-gray-300 shadow-sm shadow-gray-700"
				>
					{exp.title}
					{#if exp.current}
						<span
							class="bg-white border-[1px] border-gray-400 text-black text-sm font-medium px-2 py-0.5 rounded ml-auto"
							>CURRENT</span
						>
					{/if}
				</h3>
				<p
					class="text-md text-white bg-black text-start border-[1px] w-fit px-2 py-1 mb-1 rounded-md border-gray-300 shadow-sm shadow-gray-600"
				>
					{exp.date}
				</p>
				<div class="h-[1px] bg-black rounded-full" />
				<div class="text-lg text-black max-w-md">
					{#each exp.roles as role, index}
						<p
							class="bg-black my-1 text-white px-2 py-1 rounded-md shadow-sm shadow-gray-400 border-[1px]"
						>
							{role}
						</p>
					{/each}
				</div>
				<div class="h-[1px] bg-black rounded-full my-1" />
				<div class="max-w-md">
					{#each exp.skills as skill, index}
						<span
							class="inline-block bg-black text-white border-[1px] border-gray-300 mx-[1.5px] my-1 px-2 py-1 rounded-md shadow-sm shadow-gray-400"
							>{skill}</span
						>
					{/each}
				</div>
			</li>
		{/each}
		<span
			class="bg-white text-black text-md font-small text-sm mr-1 mt-1 px-2.5 py-0.5 rounded inline-block shadow-sm shadow-gray-400 border-2 border-gray-400 ml-5"
			>Start</span
		>
	</ol>
</div>
