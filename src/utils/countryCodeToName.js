export const countryCodeToName = async (borderCountriesCodes) => {
	let borderCountriesCodesString = borderCountriesCodes.toString().toLowerCase();
	const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;

	try {
		const countryCodesRes = await fetch(countryCodesUrl);
		const countryCodesData = await countryCodesRes.json();

		const countriesCodesNames = await countryCodesData.map((country) => country.name);
		return countriesCodesNames;
	} catch (error) {
		console.error('An error has occured', error);
	}
};
