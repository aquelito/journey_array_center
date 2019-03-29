function howMuchButterDoINeed(elements) {

	const total = elements.reduce((acc, element) => {
		// console.log(element)
		return acc + element.butter
	}, 0)

	return total;
}

module.exports = {
	howMuchButterDoINeed
};