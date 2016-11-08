const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
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

app.use("/special", function(req, res, next){
	console.log("You have entered the danger zone!!!");
	next();

});

app.get("/views", function(req, res){
	res.render('index', locals );
});

app.get("/news", function(req, res){

	res.send("Hello News");
});