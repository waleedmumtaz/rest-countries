export const countryCodeToName = async (borderCountriesCodesString) => {
	// const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	// fetch(countryCodesUrl)
	// 	.then((countryCodesRes) => countryCodesRes.json())
	// 	.then((countryCodesData) => countryCodesData.map((country) => country.name));
	const countryCodesUrl = `https://restcountries.com/v2/alpha?codes=${borderCountriesCodesString}`;
	const countryCodesRes = await fetch(countryCodesUrl);
	const countryCodesData = await countryCodesRes.json();

	return countryCodesData;
};
