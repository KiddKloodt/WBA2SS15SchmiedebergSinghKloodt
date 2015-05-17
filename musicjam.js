var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
 
var app = express();
 
var data=[
    {title: "Name"},
    {title: "Vorname"},
	{title: "Geb."}
]


 
app.get('/index', function(reg, res){
    res.status(200).json(data);
});
 
app.post('/index', jsonParser, function(req,res){
    data.push(req.body);
	res.type('plain').send('es hat geklappt!');
})
 
app.get('/',function(reg, res){
    res.send('Willkommen auf der Seite');
});
 
app.listen(3000, function(){
    console.log('Server listens on port 3000.');
});
