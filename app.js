const express = require('express');
const app = express();
const morgan = require('morgan')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(
      'Welcome to pyramid word checker! \n To start go to /pyramid'
    );
});

app.use('/pyramid', require('./routes/pyramid'))


//error handlers

app.use((error, req, res, next) => {
    console.log(error.status)
    if(error.status === 404) {
        res.send('Page not found')
    } else {
        res.send(error.message)
    }
})

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
