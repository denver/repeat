'use strict';

var config = require('./config.json');

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var client = require('twilio')(config.accountSid, config.authToken);
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sms', function(req, res) {
	console.log(req.body);
	var self = req.body;

	console.log('Full JSON Body of message:\n', self);
	console.log('Message body:' , self.Body , '\nfrom state:' , self.FromState , "\nfrom number: " , self.From );
	console.log('Time:', Date.now());

	client.messages.create({
		to: self.From,
		from: config.twilioPhone,
		body: self.Body,
	}, function(err, message) {
			console.log(message.sid);
		});
});

http.createServer(app).listen(1337, function () {
  console.log('Express server listening on port 1337');
});
