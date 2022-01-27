export const sortCountries = (fetchedCountries) => {
	return fetchedCountries.sort((a, b) => {
		if (a.name.common < b.name.common) {
			return -1;
		}

		return 1;
	});
};
