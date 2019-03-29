function checkMostUsedWord(text) {
    const listOfWords = text.toLocaleUpperCase().split(' '); 

    const outputWords = listOfWords
        .reduce((count, word) => {
            count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
            return count;
        }, {})
    
    let sortable = []
    for (let word in outputWords) {
        sortable.push([word, outputWords[word]]);
    }

    const output = sortable.sort((a, b) => b[1] - a[1]);
    return output[0][0];
}

function checkLessUsedWord(text){
    const listOfWords = text.toLocaleUpperCase().split(' '); 

    const outputWords = listOfWords
        .reduce((count, word) => {
            count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
            return count;
        }, {})
    
    let sortable = []
    for (let word in outputWords) {
        sortable.push([word, outputWords[word]]);
    }
    
    const output = sortable.sort((a, b) => a[1] - b[1]);
    return output[0][0];
}

module.exports = {
	checkMostUsedWord,
	checkLessUsedWord,
};