<script>
	import Country from './Country.svelte';

	export let filteredCountries;
</script>

<div class="px-5 sm:px-0 sm:container sm:mx-auto">
	<ul class="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
		{#each filteredCountries as country}
			<li class=''>
				<Country {country} />
			</li>
		{/each}
	</ul>
</div>
