var config = require('./config.json');

// Twilio Credentials 
var accountSid = config.accountSid; //'your_Sid; 
var authToken = config.authToken; //'your_auth_token'; 

// message here for meow
const theBody = 'repeat';

//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: config.adminPhone,
    from: config.twilioPhone, 
    body: theBody, 
}, function(err, message) { 
    console.log(message.sid);
    console.log(message);
});
