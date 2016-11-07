const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const app = express();


app.listen(3000);

// app.use("/", function(req, res, next){
// 	morgan(chalk.blue(':method'));
// 	next();
// });

app.use(morgan(chalk.blue(':method')));
app.use(morgan(chalk.red(':url')));
app.use(morgan(chalk.green(':status')));

app.use("/special", function(req, res, next){
	console.log("You have entered the danger zone!!!");
	next();

});

app.get("/", function(req, res){

	res.send("Hello World");
});

app.get("/news", function(req, res){

	res.send("Hello News");
});