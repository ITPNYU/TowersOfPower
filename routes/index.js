// Twilio account info
var Twilio = require('twilio-js');
Twilio.AccountSid = process.env.Twilio_AccountSid; // get these from you twilio account
Twilio.AuthToken  = process.env.Twilio_AuthToken; // get these from you twilio account
/*
	GET /
*/
exports.main = function(req, res){
	res.send('<h2>Form to send a text message:</h2><form method="POST" action="/">' +
					'To: <input type="text" name="To" value="16464309130" />   ** Note that for this example this is going to be your Twilo number<br>' +					
					'From: <input type="text" name="From" value="17654307001" /><br>' +
					'Body: <input type="text" name="Body" />' +					
					'<input type="submit" />' +
			 '</form>');	
}

/* 
	POST /
*/
exports.main_post = function(req, res){
	
	var body = req.body.Body; // Body of the SMS
	var from = req.body.From; // From whom the message originated
	var to = req.body.To; // To whom the message is going to be delivered

	var message = "Unless you've got TOWERS OF POWER!!!"; // Outgoing message

	// Function to automate a reply
	Twilio.SMS.create({to: from, from: to, body: message}, function(err,res) {
		console.log('******* Sent SMS Message *******');
	});	 
	
	res.redirect("/");

}