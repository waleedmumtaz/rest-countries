<script>
	import CountriesList from '../components/CountriesList.svelte';
	import Search from '../components/Search.svelte';
	import SelectRegion from '../components/SelectRegion.svelte';
	import { countries } from '../stores/countries-store';

	let searchTerm = '';
	let filteredCountries = [];

	const setSearchTerm = (e) => {
		searchTerm = e.detail;
	};

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredCountries = $countries.filter((country) => {
				return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
			});
		} else {
			filteredCountries = [...$countries];
		}
	}
</script>

<main class="font-nunito-sans bg-cstm-very-light-gray-light-mode-background p-5">
	<Search on:search={setSearchTerm} />
	<SelectRegion />
	<CountriesList {filteredCountries} />
</main>
