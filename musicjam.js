var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
 
var app = express();
 
var data=[
    {title: "Hello World"},
    {title: "Test Titel2"},
	{title: "haha"}
]


 
app.get('/data', function(reg, res){
    res.status(200).json(data);
});
 
app.post('/data', jsonParser, function(req,res){
    data.push(req.body);
	res.type('plain').send('es hat geklappt!');
})
 
app.get('/',function(reg, res){
    res.send('Hello World!');
});
 
app.listen(3000, function(){
    console.log('Server listens on port 3000.');
});