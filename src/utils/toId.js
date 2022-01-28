export const toId = (countryName) => {
	return countryName.toLowerCase().split(' ').join('-');
};
