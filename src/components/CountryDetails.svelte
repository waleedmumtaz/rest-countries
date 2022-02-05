<script>
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

	// let borderCountriesNamesArray;
	// borderCountriesNamesArray = countryCodeToName(borderCountriesCodes);
	// console.log(borderCountriesNamesArray.then((data) => data));

	// countryCodeToName(borderCountriesCodes)
	// 	.then((response) => {
	// 		return console.log(response);
	// 		// let borderCountriesNames = borderCountriesNamesArray.join(', ');
	// 		// console.log(borderCountriesNamesArray);
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});
	// console.log('Need a value here!', borderCountriesNamesArray);

	// const borderCountriesNamesArray = getBorderCountriesNamesArray();
	// console.log(borderCountriesNamesArray);
	// console.log(borderCountriesNamesArray);

	// const countryCodeToName = async () => {
	// 	// const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	// 	// fetch(countryCodesUrl)
	// 	// 	.then((countryCodesRes) => countryCodesRes.json())
	// 	// 	.then((countryCodesData) => countryCodesData.map((country) => country.name));
	// 	const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	// 	const countryCodesRes = await fetch(countryCodesUrl);
	// 	const countryCodesData = await countryCodesRes.json();

	// 	borderCountriesCodesString = countryCodesData.map((country) => country.name);
	// 	console.log(countryCodesData.map((country) => country.name));
	// };

	// let borderCountriesNamesArray = countryCodeToName(borderCountriesCodes);
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
							{#each borderCountriesCodes as borderCountry}
								<li class="border shadow px-6 py-1">{borderCountry}</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
