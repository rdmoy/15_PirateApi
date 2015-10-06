/*
	Pirate Translation API: The Client

	Client-Side Cheatsheet
	======================
	document.getElementById("id")
	form.elements["name"]
	form.onsumbit = ...
	event.preventDefault()
	inputElement.value
*/


// _____________________________________________________________________________
// Setting up API requests

var endpoint = "/piratespeak?";
var parameters = {
	"englishString": ""
}

var goTranslate = function(event){
	event.preventDefault();
	var englishInput = translateForm.elements["english-text"].value;
	parameters.englishString = englishInput;
	var pirateURL = buildParam();
	var pirateAPIrequest = new XMLHttpRequest;
	pirateAPIrequest.open("GET", pirateURL, true);
	pirateAPIrequest.onreadystatechange = function(){
		if (pirateAPIrequest.readyState === 4 && pirateAPIrequest.status === 200) {
			useJSON(JSON.parse(pirateAPIrequest.responseText))
		}
	}
	pirateAPIrequest.send();
}

var buildParam = function(){
	var paramKey = Object.keys(parameters);
	var searchURL = endpoint
	for (var i = paramKey.length - 1; i >= 0; i--) {
 		searchURL += paramKey[i] + "=" + encodeURIComponent(parameters[paramKey[i]]) + "&"
 	}; 
 	return searchURL;
}

var useJSON = function(jsonResponse) {
	var text = ""
	for (i=0; i<jsonResponse.pirateTranslation.length; i++){
		if (jsonResponse.pirateTranslation[i] === "\n"){
			text += "<br>";
		}
		else {
			text += jsonResponse.pirateTranslation[i];
		}
	}
	pirateText.innerHTML = text;
}


// _____________________________________________________________________________
// Getting elements from the DOM

var pirateText = document.getElementById("pirate-text");
var translateForm = document.getElementById("translate-form");
translateForm.onsubmit = goTranslate;



// _____________________________________________________________________________
// Setting up the events so that the APIs are called when a query is submitted 
// with the form
