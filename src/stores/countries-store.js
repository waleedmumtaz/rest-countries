import { writable } from 'svelte/store';

export const countries = writable([]);

const fetchCountries = async () => {
	const url = 'https://restcountries.com/v3.1/all';
	const res = await fetch(url);
	const fetchedCountries = await res.json();

	const sortedCountries = fetchedCountries.sort((a, b) => {
		if (a.name.common < b.name.common) {
			return -1;
		}

		return 1;
	});

	countries.set(sortedCountries);
	// console.log('fetchedCountries', fetchedCountries);
};
fetchCountries();
