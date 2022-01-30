<script>
	import { numberWithCommas } from '../utils/numberWithCommas';

	export let country;
</script>

<a href={`/country/${country.id}`}>
	<div class="bg-white my-10 sm:my-0 rounded-lg shadow-sm sm:h-full">
		<img src={country.flag} alt={`Flag of ${country.name}`} class="rounded-t-lg w-full" />
		<div class="p-8 sm:flex sm:flex-col sm:items-baseline">
			{#if country.name !== undefined}
				<p class="font-extrabold text-xl mb-5">{country.name}</p>
			{/if}
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
