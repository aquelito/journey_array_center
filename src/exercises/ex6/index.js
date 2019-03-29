const { flatten } = require('../../utils/flatten');

function getPlayersNameFromPlays(plays) {

	const filter = plays
	  .filter(obj => obj.time > 60)
		.map(obj => {
			return obj.players.reduce((acc, obj2) => {
				return acc.includes(obj2.name) ? acc : acc.concat(obj2.name)
			}, [])
		})

	const finalPlayers = filter.flat();
	return finalPlayers
}

module.exports = {
	getPlayersNameFromPlays
};
