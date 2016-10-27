var express = require("express");
var bodyParser = require("body-parser");
var os = require("os");

// Global Variables
var app = express();

app.set('port', process.env.PORT || 80);

app.use(express.static(__dirname + "/"));	//To be able to use Bootstrap ;)
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));  //For parsing application/x-www-form-urlencoded
//Handle GET request
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), /*HOST,*/ function(){
	console.log("Server started at: " + getHost() + ":" + app.get('port'));
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
