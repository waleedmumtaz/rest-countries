<script>
	import Country from './Country.svelte';

	export let filteredCountries;
</script>

<div class="px-5">
	<ul>
		{#each filteredCountries as country}
			<li>
				<Country {country} />
			</li>
		{/each}
	</ul>
</div>
