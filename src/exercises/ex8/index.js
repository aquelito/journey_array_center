const fs = require('fs');

function getScore() {

	return new Promise((resolve) => {

		fs.readFile('src/exercises/ex8/files/score.json', 'utf-8', (err, data) => {

			const content = JSON.parse(data);

			const test = Object.keys(content)
				.filter(key => key === 'scoreFor' || key === 'scoreWhile')
				.map(key => content[key].reduce((acc, element) => acc += element, 0));

			resolve({
				scoreFor: test[0],
				totalFor: content.totalFor,
				scoreWhile: test[1],
				totalWhile: content.totalWhile
			});
		});
	});
}

function getBadges(){
	return new Promise((resolve) => {
		fs.readFile('src/exercises/ex8/files/badges.json', 'utf-8', (err,data) => {
			const contentFileParsed = JSON.parse(data);

			let allBadges = Object.values(contentFileParsed).flat();
			resolve(allBadges);
		});
	});
}

module.exports = {
	getScore,
	getBadges,
};
