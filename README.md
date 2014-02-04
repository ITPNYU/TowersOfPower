## Towers of Power

In this 1 point course we will learn how the GSM network works and will explore cellphone technologies and how to get your projects communicating with a cell carrier. This workshop will take place over three sessions. The first session will be dedicated to learning about the current GSM (Global System for Mobile Communications) infrastructure and how the communication between cell phones and the network happens; we will be introducing open source alternatives, both hardware and software, for setting up and deploying your own GSM network as a way to better understand the different components of the system. The second session will focus on getting hands-on experience with off the shelf GSM modules, modems and mobile hardware and getting those devices to communicate with cellphone networks via text message (SMS) and via data transfer (GPRS). The last session will be an open workshop for further developing your mini-project and presenting the projects to the rest of the class.

### node-twilio-example

This repo deploys a Node.js web application to a Heroku server.  From here, we connect our Twilio account.  Twilio allows us to setup a phone number and redirect traffic to that number to our Node.js server.  Once information reaches our server from Tiwlio, we can play and have fun with it.  

This example simply allows a user to send an to our Twilio phone number 1-904-33-POWER, and receive the automated response "Unless you've got power!".

Visit the exaample <a href="http://towers-of-power.herokuapp.com">towers-of-power.herokuapp.com</a>  

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