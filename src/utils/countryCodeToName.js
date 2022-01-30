import axios from 'axios';

export const countryCodeToName = async (borderCountriesCodes) => {
	let borderCountriesCodesString = borderCountriesCodes.toString().toLowerCase();
	const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	// const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	// fetch(countryCodesUrl)
	// 	.then((countryCodesRes) => countryCodesRes.json())
	// 	.then((countryCodesData) => countryCodesData.map((country) => country.name));

	// let borderCountriesCodesString = borderCountriesCodes.toString().toLowerCase();
	// const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	// const countryCodesRes = await fetch(countryCodesUrl);
	// const countryCodesData = await countryCodesRes.json();
	// return countryCodesData.map((country) => country.name);

	try {
		const countryCodesData = await axios.get(countryCodesUrl);
		// const countriesCodesNames = await Promise.all(
		// 	countryCodesData.data.map((country) => country.name)
		// );
		const countriesCodesNames = countryCodesData.data.map((country) => country.name);
		return countriesCodesNames;
	} catch (error) {
		console.log(error);
	}
};
