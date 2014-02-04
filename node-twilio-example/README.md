## Node.js - Twilio - SMS - Express - EJS - Bootstrap Template

This is a demo web application that connects to Twilio in order to send SMS messages to the web. There are many steps need to take in order to get this working.  The most challenging portion is getting the Node.js application running.  Please visit the <a href="http://itpwebclass.herokuapp.com/">ITP Dynamic Web Development</a> syllabus from John Schimmels class for details on setting up a Node.js server.  Most of this is built from the ITP DWD class though I have simply added a few thing and made it my own so I can develop quickly.  

To use, follow the getting started below.  Very simple!


### Getting started w/ local development server

1) Download this template repo and navigate into the code directory with Terminal.

2) Run **npm install** to get all required libraries.

	npm install

3) A Git repository and Heroku app are required for this Example to work. 

	git init
	git add .
	git commit -am "init commit"


4) Create Heroku app and add database

	heroku create

5) Add MongoLabs Starter MongoDB add on to your heroku app

	heroku addons:add mongolab:starter

6) Get Heroku MongoLab connection string into .env file.  Use heroku config:set to set environmental variables.

	heroku config --shell | grep MONGOLAB_URI >> .env
	heroku config:set Twilio_AccountSid=XXXXXXXXXXXXXX Twilio_AuthToken=XXXXXXXXXXXXXX

Your connection string to MongoDB will be in your **.env** file now.

7) Start server with **foreman start**.

	foreman start

Foreman reads your .env file, populates the process.env object for use in your app.

8) Open web browser to <http://localhost:5000> to view the web app.

9) Stop the web server press Command+C in the Terminal window.

### Auto restart development server

To auto restart your development server after you make some changes to your code. Install **Nodemon**. [Nodemon](https://github.com/remy/nodemon) will watch your files and restart the server for you.

Install Nodemon. In Terminal type,

	npm install -g nodemon

There are two possible ways to use Nodemon,

	foreman run nodemon app.js

Or with the helper script

	. devserver

The **.nodemonignore** file will ignore certain files and directories from being watched. By default and for example we're ignoring /public folder.


### Frameworks and NodeJS

Libraries and frameworks are created for all programming languages to make complicated programming tasks more easier to program. A database library will create the connection to the database server, insert and query data and return a result that is easily used. A framework involves the same ideas of a library but it usually is larger in size and complexity - picking a framework is usually done at the beginning of development because it is often difficult to switch to another. Android, Arduino, OpenFrameworks, Sinatra, Ruby on Rails, Django and Processing are frameworks, each is a collection of libraries to interact with lower level code.

Libraries and frameworks are available to make your programming life easier - someone else has had similar tasks and requirements so they organized their code into a library and made it available to the community.

#### ExpressJS

ExpressJS (http://expressjs.com/guide.html) is a popular framework for building web applications in NodeJS. ExpressJS's core is taken from the Connect framework.

#### Routing

Routing is how you direct the user's requested URL to retrieve the appropriate 'page' or save the submitted form. All routes execute functions, the callbacks should receive a request and response object from Express

app.get('/page1',function(request, response){
    //your code goes here
})

#### HTTP Methods

GET- a user requests a web page or resource

	app.get('/about',function(request, response){
	    console.log("GET request for /about");
	    response.send("This is the about page.");
	});

POST- a user submits a form

	app.post("/the-form", function(request, response){
	    
	    console.log("a user has request /the-form via POST");
	    
	    //form processing code goes here....
	    
	    //send message to user
	    response.send("okay, we'll process that right away.")
	});

### Twilio

Twilio allows you to register a phone number and make HTTP GET and POST requests through that phone number.  This, for example, enables us to send an SMS to a website.  This demo uses Twilio's API to return an SMS once one is receieved.  The user will send a text message to our registerd phone number, we will genereate an automated return.

First we will set our HTTP Post path in our Twilio account.  It will look something like POST http://www.mywebsite.com/receieveSMS  This will be the destination action once Twilio receieves the SMS.  Please checkout the Twilio API documentation as there is much much more detail on how it works.

	// Your Twilio credentials 
	var Twilio = require('twilio-js');
	Twilio.AccountSid = process.env.Twilio_AccountSid; 
	Twilio.AuthToken  = process.env.Twilio_AuthToken;

	// Accessing incoming variables.
	var body = req.body.Body; // Body of the SMS
	var from = req.body.From; // From whom the message originated
	var to = req.body.To; // To whom the message is going to be delivered

	// Function to generate a response
	Twilio.SMS.create({to: from, from: to, body: message}, function(err,res) {
		console.log('******* Sent SMS Message *******');
	});	 

-----


