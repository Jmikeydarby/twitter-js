const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const app = express();


app.listen(3000);

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);


app.use(morgan(chalk.blue(':method') + chalk.red(' :url') + chalk.green(' :status')));

app.use('/', routes);


