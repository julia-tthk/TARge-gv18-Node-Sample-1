const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    console.log(__dirname);
    //res.send("<h1>Hello World!</h1>");
});

app.post("/", function(req, res){
    let num1 = Number(req.body.number1);
    let num2 = Number(req.body.number2);

    let result = num1 + num2;
    res.send(`Your result is ${result}`);
    console.log(num1);    
    console.log(num2);
})


app.get("/contact", function(req, res){
    res.send("julia.voronetskaja@tthk.ee");
})

app.listen(3000, function(){
    console.log("Server is running on Port 3000.");
});