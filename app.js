const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// require("dotenv").config();

app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

var unirest = require("unirest");

var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

req.headers({
  "authorization": "ib7rUfnS6tNHXE8LYcZMC219PvIuOJsBh4DdmAj3RWwGqTozFk5R6cxFg0mn2jyVlQKGrioa1CPYJ8LZ"
});


var random = Math.floor(4000*Math.random());
// var number = req.body.num;

 req.form({
   "variables_values": random,
   "route": "otp",
   "numbers": "8294986499",
 });

 req.end(function (res) {
   if (res.error) throw new Error(res.error);

   console.log(res.body);
 });

 // req.headers({
 //   "authorization": "ib7rUfnS6tNHXE8LYcZMC219PvIuOJsBh4DdmAj3RWwGqTozFk5R6cxFg0mn2jyVlQKGrioa1CPYJ8LZ"
 // });
 //
 // req.form({
 //   "message": "Ladai mat kro",
 //   "language": "english",
 //   "route": "q",
 //   "numbers": "8294986499",
 // });
 //
 // req.end(function (res) {
 //   if (res.error) throw new Error(res.error);
 //
 //   console.log(res.body);
 // });

app.listen(3000, function(req, res){
  console.log("Port is listening at 3000");
});
