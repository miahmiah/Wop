//	Wop Boilerplate :D
//	Version 0.0.1-alpha
//	MIT Licensed

var express = require('express'),
	http = require('http'),
	path = require('path'),
	_ = require('underscore'),
	mysql = require('mysql'),
	sha1 = require('sha1'),
	passport = require('passport'),
	fs = require('fs');


var db = mysql.createConnection({
		host: 'localhost',
		user: '',
		password: '',
		database: ''
	});

var app = express();

app.set('root_dir', __dirname);
app.set('port', process.env.PORT || 3000);


//	Let's load our config files :3
require('./config/express.js')(app, express);
require('./config/routes.js')(app);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Wop on http://localhost:' + app.get('port'));
});
