var ejs = require('ejs')
	, partials = require('express-partials')
	, express = require('express')
	, app = express();

var routes = require('./routes/index.js');	
	
app.configure(function(){

	app.use(partials());
	app.engine('html', require('ejs').renderFile); //renders .ejs as html
	
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
	
	app.use(express.bodyParser()); //deals with incoming request objects
	app.use(express.methodOverride());
	    
	/**** Turn on some debugging tools ****/
	app.use(express.logger()); // sends messages into the terminal 
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); //dumpExceptions - directs exceptions to stderr - showStack - generate HTML for an exception å
    
});

app.get('/', routes.main);
app.post('/', routes.main_post);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});