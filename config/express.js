var path = require('path');

module.exports = function(app, express) {
	app.set('views',app.get('root_dir') + '/app/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser("sikreto"));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(app.get('root_dir'), '/public')));
	
	if ('development' == app.get('env')) {
	  app.use(express.errorHandler());
	}
}
