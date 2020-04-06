const wordChecker = require('../utils/wordChecker')

class Word {
  constructor(word) {
    this.currentWord = word;
  }

  getWord() {
    return this.currentWord;
  }

  isPyramid() {
    return wordChecker(this.currentWord)? `${this.currentWord} is a pyramid word` : `${this.currentWord} isn\'t a pyramid word`;
  }
}

module.exports = Word;
