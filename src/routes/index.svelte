<script context="module">
	export async function load({ fetch }) {
		const url = 'https://restcountries.com/v3.1/all';
		const res = await fetch(url);
		const fetchedCountries = await res.json();

		const sortedCountries = sortCountries(fetchedCountries);

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

	export let countries;

	let searchTerm = '';
	let filteredCountries = [];

	const setSearchTerm = (e) => {
		searchTerm = e.detail;
	};

	$: {
		if (searchTerm) {
			filteredCountries = countries.filter((country) => {
				return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
			});
		} else {
			filteredCountries = [...countries];
		}
	}
</script>

<main class="font-nunito-sans bg-cstm-very-light-gray-light-mode-background p-5">
	<Search on:search={setSearchTerm} />
	<SelectRegion />
	<CountriesList {filteredCountries} />
</main>
