const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));

app.use('/', require('./routes'));

app.use((error, req, res, next) => {
    console.log(error.status);
    if(error.status === 404) {
        res.send('Page not found');
    } else {
        res.send(error.message);
    }
});

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
