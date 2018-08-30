var express = require("express");
var app = express();


app.get("/",function(req, res){
    res.send("hey there welcome to my assignment !!");
});

app.get("/speak/:animal",function(req, res){
    var sounds = {pig:"oink", cow:"moo", dog:"Woof Woof"};
    var animal = req.params.animal;
    var x = sounds[animal];
    res.send("the "+ animal + " says "+x);
});

app.get("/repeat/:alpha/:beta", function(req, res){
    var alpha = req.params.alpha+" ";
    var beta = req.params.beta;
    res.send(alpha.repeat(beta));
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started !!");
});

app.get("*",function(req, res){
    res.send("Sorry this page is not found what are you doing with our life");
});