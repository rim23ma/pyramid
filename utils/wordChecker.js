const wordChecker = (word) => {
  let letters = {};
  for (let i = 0; i < word.length; i++) {
    if (!letters[word[i]]) letters[word[i]] = 1;
    else letters[word[i]]++
  }
  const countLetters = Object.values(letters).sort();
  for (let i = 0; i < countLetters.length; i++) {
    if (countLetters[i] !== i+1) return false;
  }
  return true;
}

module.exports = wordChecker;
