const router = require('express').Router()

router.get('/', (req, res, next) => {
    try {
        res.send('enter word to check')
    } catch(err) {
        next(err)
    }
})

router.get('/:word', (req, res, next)  => {
    try {
        const word = req.params.word;
        const isPyramid = true;
        if (isPyramid) {
            res.send(`${word} is a pyramid word`)
        } else {
          res.send(`${word} isn't a pyramid word`)
        }
    } catch (err) {
        console.log('err.message', err.message)
        next(err)
    }
})

module.exports = router
