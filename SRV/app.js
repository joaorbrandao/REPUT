var express = require("express");
var bodyParser = require("body-parser");
var os = require("os");

// Global Variables
var app = express();
var PORT = 80;

app.use(express.static(__dirname + "/"));	//To be able to use Bootstrap ;)
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));  //For parsing application/x-www-form-urlencoded

// Function to handle the HTTP requests
//Handle GET request
app.get("/", function(request, response){
	//response.sendFile(__dirname + "/index.html");
	var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
	console.log("Request from: " + ip);
	response.render("index");
});

app.listen(PORT, /*HOST,*/ function(){
	console.log("Server started at: " + getHost() + ":" + PORT);
});


//Function to get host's ip address
function getHost(){
	var interfaces = os.networkInterfaces();
	var addresses = [];
	for (var k in interfaces) {
	    for (var k2 in interfaces[k]) {
	        var address = interfaces[k][k2];
	        if (address.family === 'IPv4' && !address.internal) {
	            addresses.push(address.address);
	        }
	    }
	}
	return addresses;
}
