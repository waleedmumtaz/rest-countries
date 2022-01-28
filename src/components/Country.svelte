<script>
	import { numberWithCommas } from '../utils/numberWithCommas';

	export let country;
</script>

<a href={`/country/${country.id}`}>
	<div class="bg-white my-10 rounded-lg shadow-sm">
		<img src={country.flag} alt={`Flag of ${country.name}`} class="rounded-t-lg w-full" />
		<div class="p-8">
			<p class="font-extrabold text-xl mb-5">{country.name}</p>
			<p class="text-lg">
				<span class="font-semibold">Population: </span>{numberWithCommas(country.population)}
			</p>
			<p class="text-lg"><span class="font-semibold">Region: </span>{country.region}</p>
			{#if country.capital !== undefined}
				<p class="text-lg"><span class="font-semibold">Capital: </span>{country.capital}</p>
			{/if}
		</div>
	</div>
</a>
