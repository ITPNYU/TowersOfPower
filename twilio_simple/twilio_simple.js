//require the Twilio module and create a REST client
//This is alo where you put your Account SID and Auth Token
// You can get that info at this link after you sign up. https://www.twilio.com/user/account/developer-tools/test-credentials

var AccountSid ='AccountSid';
var AuthToken = 'AuthToken';

var client = require('twilio')(AccountSid, AuthToken);



//If you are making calls from a trial account, the 'To' / 'numberToCall' phone number must be verified with Twilio.
//You can do this by logging into your account
var numberToCall = "+11234556781";

//This is your twilio number. You can check your number in the account section of Twilio.com
var myTwilioNumber  ='+18019809377';

//Send an SMS text message
client.sendMessage({

    to:numberToCall, // Any number Twilio can deliver to
    from: myTwilioNumber, // A number you bought from Twilio and can use for outbound communication
    body: 'Towers of Power!!' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any
        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
    else{
        console.log(err);
    }
});

//Place a phone call, and respond with TwiML instructions from the given URL
client.makeCall({

    to:numberToCall, // Any number Twilio can call
    from: myTwilioNumber, // A number you bought from Twilio and can use for outbound communication
    url: 'http://demo.twilio.com/docs/voice.xml' // A URL that produces an XML document (TwiML) which contains instructions for the call

}, function(err, responseData) {

if (err) console.log(err);
if(responseData){
    //executed when the call has been initiated.
    console.log(responseData.from); // outputs "+14506667788"
}
    

});
