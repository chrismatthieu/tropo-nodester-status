var http = require('http');
var tropowebapi = require('tropo-webapi');
var request = require('request');

http.createServer(function (req, res) {

	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI(); 	

	// Fetch Nodester status -> http://api.nodester.com/status
	// returns {"status":"up","appshosted":2878,"appsrunning":1759}
	request('http://api.nodester.com/status', function (error, response, body) {
	     if (!error && response.statusCode == 200) {

	       // console.log(body) // Print status
	       var statusreq = JSON.parse(body);

	       tropo.say('nodester is ' + statusreq["status"] + ' and hosting ' + statusreq["appshosted"] + ' applications with '+ statusreq["appsrunning"] + ' running at the moment ');

	       res.writeHead(200, {'Content-Type': 'application/json'}); 
           res.end(tropowebapi.TropoJSON(tropo));
	     }
	   })
	
}).listen(13151);
