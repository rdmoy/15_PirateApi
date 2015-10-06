/*
	Node Server

	This server dudette sends static files at localhost:8080/ and acts as an API
	at localhost:8080/piratespeak
*/

var pirateDictionary = require("./pirate-dictionary.js"); //connect local module
var express = require("express");
var path = require("path");

var app = express();

var staticPath = path.join(__dirname, "public");
var staticHandler = express.static(staticPath); //grab entire public directory
app.use(staticHandler); //use public directory in app

app.get("/piratespeak", function(req, res){ //url request
	var qs = req.query; //parses URL request
	var responseJSON = { //sets up JSON to send back
		"status": {
			"version": "1.0",
			"message": ""
		},
		"pirateTranslation": [],
	};
	var englishSpeak = qs.englishString; //englishString is query key 
	responseJSON.pirateTranslation = pirateDictionary.translate(englishSpeak); //translate query value string adds to JSON response
	responseJSON.status.message = "Success"; //adds message to JSON repsonse
	res.send(responseJSON); //sends JSON object to qhoever requested it 

	

});

var envPort = process.env.PORT;
if (envPort !== undefined) app.listen(envPort)
else app.listen(8080);

