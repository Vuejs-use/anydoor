const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/router');

const server = http.createServer((req,res) => {
	const filePath = path.join(conf.root,req.url);
	route(req,res,filePath);
});
server.listen(conf.port,conf.hostname,() =>{
	console.log(chalk.green(`Server running 
	at http://${conf.hostname}:${conf.port}`));
});