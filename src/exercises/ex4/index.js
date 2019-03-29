function deleteElementByNameModifyingExisting(people, toDelete) {
	let newPeople = people.filter(elm => elm !== toDelete)
	return newPeople
}

module.exports = {
	deleteElementByNameModifyingExisting
};
