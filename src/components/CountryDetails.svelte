<script>
	import { countryCodeToName } from '../utils/countryCodeToName';
	import { numberWithCommas } from '../utils/numberWithCommas';
	export let countryDetails;

	let {
		name,
		nativeName,
		population,
		region,
		subRegion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borderCountriesCodes,
		flag
	} = countryDetails;

	let currenciesWithCommas = currencies.map((currency) => currency.name).join(', ');
	let languagesWithCommas = languages.map((language) => language.name).join(', ');
	let borderCountriesCodesString = borderCountriesCodes.toString().toLowerCase();
	let borderCountriesNamesArray = countryCodeToName(borderCountriesCodesString);

	console.log('borderCountriesNamesArray', borderCountriesNamesArray);
</script>

<div>
	<div class="p-5 my-5">
		<a href="/" class="border shadow px-6 py-1">&#8592; Back</a>
		<img src={flag} alt={`Flag of ${name}`} class="mt-14" />
		<h2 class="font-bold text-2xl my-5">{name}</h2>
		<div class="space-y-3 mb-12">
			<p><span class="font-semibold">Native Name: </span>{nativeName}</p>
			<p><span class="font-semibold">Population: </span>{numberWithCommas(population)}</p>
			<p><span class="font-semibold">Region: </span>{region}</p>
			<p><span class="font-semibold">Sub Region: </span>{subRegion}</p>
			<p><span class="font-semibold">Capital: </span>{capital}</p>
		</div>
		<div class="space-y-3 mb-12">
			<p><span class="font-semibold">Top Level Domain: </span>{topLevelDomain}</p>
			<p><span class="font-semibold">Currencies: </span>{currenciesWithCommas}</p>
			<p>
				<span class="font-semibold">Languages: </span>{languagesWithCommas}
			</p>
		</div>
		{#if borderCountriesCodes !== undefined}
			<p class="font-semibold text-lg mb-5">Border Countries:</p>
			<ul class="flex flex-wrap gap-3">
				{#each borderCountriesCodes as borderCountry}
					<li class="border shadow px-6 py-1">{borderCountry}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
