var express=require("express")
var fs= require("fs")
var app=express()
// add middle ware function for body parsing
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',function(req,res){
res.send("hello it is my first express application")
})
app.listen(5000,function(){console.log("server is running on port 5000")})
app.get('/studentinfo',function(req,res)
{
res.sendFile('StudentInfo.html', { root: __dirname });
})
app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName+
    ' ';
    var Age= req.body.myAge+ ' Gender: ' + req.body.gender+""
    Qual= ' Qualification'+ req.body.Qual
    console.log(req.body.Qual)
    res.send({
    status: true,
    message: 'form Details', data: {
    name: name, age:Age, Qualification:Qual,
    }
    });
    });
    
