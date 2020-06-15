var express = require('express');
var path =require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
var login=require('./routes/loginservice')
var getprojects=require('./routes/getprojects')
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/views/" + "login.html");
});
app.get('/listview', function (req, res) {
    res.sendFile(__dirname + "/public/views/" + "tableview.html");
});
app.get('/getprojects',getprojects);

 app.post('/login',login)


// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
