const router = require('express').Router();
const Word = require('../models/Word');

router.get('/', (req, res, next) => {
    try {
      res.render('pyramid');
    } catch(err) {
        next(err);
    }
});

router.get('/:word', (req, res, next)  => {
    try {
      const word = new Word(req.params.word);
      res.render('answer', {word: word});
    } catch (err) {
      console.log('err.message', err.message);
      next(err);
    }
})

module.exports = router;
