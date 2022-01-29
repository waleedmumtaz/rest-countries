<script context="module">
	export async function load({ fetch }) {
		const restCountriesUrl = 'https://restcountries.com/v2/all';
		const res = await fetch(restCountriesUrl);
		const fetchedCountries = await res.json();

		let transformedCountries = fetchedCountries.map((country) => {
			return {
				id: `/country/${toId(country.name)}`,
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
				borderCountriesCodes: country.borders
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
	import { page } from '$app/stores';
	import CountryDetails from '../../components/CountryDetails.svelte';
	import { toId } from '../../utils/toId';

	const pageId = $page.url.pathname;
	export let countries;

	const countryDetails = countries.find((country) => country.id === pageId);
</script>

<CountryDetails {countryDetails} />
