var express = require("express");
var bodyParser = require("body-parser");


// Global Variables
var app = express();
var HOST = "192.168.1.146";
var PORT = 80;

app.use(express.static(__dirname + "/"));	//To be able to use Bootstrap ;)
app.use(bodyParser.json()); //For parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));  //For parsing application/x-www-form-urlencoded


// Function to handle the HTTP requests
//Handle GET request
app.get("/", function(request, response){
    //response.sendFile(__dirname + "/index.html");
	response.render("index");
});

app.listen(PORT, /*HOST,*/ function(){
    console.log("Server started at: " + HOST + ":" + PORT);
});
