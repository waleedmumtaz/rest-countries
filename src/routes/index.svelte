<script context="module">
	export async function load({ fetch }) {
		const url = 'https://restcountries.com/v3.1/all';
		const res = await fetch(url);
		const fetchedCountries = await res.json();

		const transformedCountries = fetchedCountries.map((country) => {
			return {
				id: toId(country.name.common),
				flag: country.flags.svg,
				name: country.name.common,
				population: country.population,
				region: country.region,
				capital: country.capital
			};
		});

		const sortedCountries = sortCountries(transformedCountries);

		return {
			props: {
				countries: sortedCountries
			}
		};
	}
</script>

<script>
	import CountriesList from '../components/CountriesList.svelte';
	import Search from '../components/Search.svelte';
	import SelectRegion from '../components/SelectRegion.svelte';
	import { sortCountries } from '../utils/sortCountries';
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

<main class="font-nunito-sans bg-cstm-very-light-gray-light-mode-background p-5">
	<Search on:search={setSearchTerm} />
	<SelectRegion on:filter={setRegion} />
	<CountriesList {filteredCountries} />
</main>
