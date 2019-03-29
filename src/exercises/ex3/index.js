function doIHaveFruits(fruits, whatIHave) {
	let haveFruits = whatIHave.some(elm => fruits.includes(elm));
	return haveFruits;
}

function urlHasKeyword(splittedUrl) {
	let hasEasterEgg = splittedUrl.some(elm => elm === 'easteregg');
	return hasEasterEgg;
}

function everyNoteUpThanTen(minNote, notes) {
	let allNotesGood = notes.every(elm => elm >= minNote);
	return allNotesGood;
}

module.exports = {
	doIHaveFruits,
	urlHasKeyword,
	everyNoteUpThanTen,
};
