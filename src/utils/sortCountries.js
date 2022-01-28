export const sortCountries = (fetchedCountries) => {
	return fetchedCountries.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}

		return 1;
	});
};
