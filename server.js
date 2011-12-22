var http = require('http');
require('tropo-webapi');

http.createServer(function (req, res) {

	// Create a new instance of the TropoWebAPI object.
	var tropo = new TropoWebAPI();
	tropo.say("Please hold while Tropo checks on the status of nodester.");

	// // Demonstrates how to use the base Tropo action classes.
	// var say = new Say("Please enter your 5 digit zip code.");
	// var choices = new Choices("[5 DIGITS]");
	// 
	// // Action classes can be passes as parameters to TropoWebAPI class methods.
	// tropo.ask(choices, 3, false, null, "foo", null, true, say, 5, null);
	// tropo.on("continue", null, "http://somefakehost.com:8000/", true);

	// Render out the JSON for Tropo to consume.
	response.writeHead(200, {'Content-Type': 'application/json'}); 
	response.end(TropoJSON(tropo));
	
}).listen(13151);
