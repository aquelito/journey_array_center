function isEven (n) {
  const output = n % 2 === 0;
  return output
}

function evens (arr) {
  const output = arr.filter(isEven);
  return output
}

function odds (arr) {
  const output = arr.filter((elù)=> !isEven(elù))
  return output
}

module.exports = {
	evens,
	odds,
};