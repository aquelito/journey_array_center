function getCountries(countries) {

	const newCountries = countries.map(country => {
		return {
			name: country.name,
			iso: `${country.iso639}-${country.iso3166}`
		}
	})

	return newCountries;
}

module.exports = {
	getCountries,
};
