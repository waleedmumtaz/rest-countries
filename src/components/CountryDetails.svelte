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

	let currenciesWithCommas, languagesWithCommas;

	if (currencies !== undefined) {
		currenciesWithCommas = currencies.map((currency) => currency.name).join(', ');
	}
	if (languages !== undefined) {
		languagesWithCommas = languages.map((language) => language.name).join(', ');
	}

	let borderCountriesNames = [];
	(async () => {
		borderCountriesNames = await countryCodeToName(borderCountriesCodes);
	})();
</script>

<svelte:head>
	<title>{name} | Where in the world?</title>
</svelte:head>

<div class="dark:bg-slate-900 dark:text-slate-200 flex-1">
	<div class="p-5 md:px-0 my-5 md:container md:mx-auto">
		<a href="/" class="border shadow px-6 py-1">&#8592; Back</a>
		<div class="md:flex md:items-center md:gap-20">
			<img src={flag} alt={`Flag of ${nativeName}`} class="mt-14 md:max-w-2xl" />
			<div>
				{#if name !== undefined}
					<h2 class="font-bold text-2xl md:text-3xl my-5 md:mb-10">{name}</h2>
				{/if}
				<div class="md:flex md:justify-between">
					<div class="space-y-3 mb-12">
						<p><span class="font-semibold">Native Name: </span>{nativeName}</p>
						<p><span class="font-semibold">Population: </span>{numberWithCommas(population)}</p>
						<p><span class="font-semibold">Region: </span>{region}</p>
						<p><span class="font-semibold">Sub Region: </span>{subRegion}</p>
						{#if capital !== undefined}
							<p><span class="font-semibold">Capital: </span>{capital}</p>
						{/if}
					</div>
					<div class="space-y-3 mb-12">
						<p><span class="font-semibold">Top Level Domain: </span>{topLevelDomain}</p>
						{#if currencies !== undefined}
							<p><span class="font-semibold">Currencies: </span>{currenciesWithCommas}</p>
						{/if}
						{#if languages !== undefined}
							<p><span class="font-semibold">Languages: </span>{languagesWithCommas}</p>
						{/if}
					</div>
				</div>
				<div />
				{#if borderCountriesCodes !== undefined}
					<div class="md:flex md:justify-start md:gap-5">
						<p class="font-semibold text-lg mb-5 md:mb-0">Border Countries:</p>
						<ul class="flex flex-wrap gap-3">
							{#each borderCountriesNames as borderCountry}
								<li class="border shadow px-6 py-1 dark:bg-slate-800 dark:border-none">
									{borderCountry}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
