<script context="module">
	export async function load({ fetch }) {
		const url = 'https://restcountries.com/v2/all';
		const res = await fetch(url);
		const fetchedCountries = await res.json();

		const transformedCountries = fetchedCountries.map((country) => {
			return {
				id: toId(country.name),
				flag: country.flags.svg,
				name: country.name,
				population: country.population,
				region: country.region,
				capital: country.capital,
				nativeName: country.nativeName,
				subRegion: country.subregion,
				topLevelDomain: country.topLevelDomain,
				currencies: country.currencies,
				languages: country.languages,
				borderCountries: country.borders
			};
		});

		return {
			props: {
				countries: transformedCountries
			}
		};
	}
</script>

<script>
	import CountriesList from '../components/CountriesList.svelte';
	import Search from '../components/Search.svelte';
	import SelectRegion from '../components/SelectRegion.svelte';
	import { toId } from '../utils/toId';

	export let countries;

	let searchTerm = '';
	let filteredCountries = [];
	let region = '';

	const setSearchTerm = (e) => {
		searchTerm = e.detail;
	};

	const setRegion = (e) => {
		region = e.detail;
	};

	$: {
		if (searchTerm || region) {
			filteredCountries = countries.filter((country) => {
				return country.name.toLowerCase().includes(searchTerm.toLowerCase());
			});

			if (region) {
				filteredCountries = filteredCountries.filter((country) => {
					return country.region == region;
				});
			}
		} else {
			filteredCountries = [...countries];
		}
	}
</script>

<svelte:head>
	<title>Where in the world?</title>
</svelte:head>

<main class="font-nunito-sans bg-cstm-very-light-gray-light-mode-background p-5">
	<div class="sm:flex sm:justify-between sm:container sm:mx-auto">
		<Search on:search={setSearchTerm} />
		<SelectRegion on:filter={setRegion} />
	</div>
	<CountriesList {filteredCountries} />
</main>
