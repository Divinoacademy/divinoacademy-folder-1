var express = require('express');
var app = express();
var cors = require('cors');
var path = require('path');
var PORT = process.abort.PORT || 8000;
var corsOptions = {
    origin: 'http://localhost:8080',
}
//cors(corsOptions);

let customizedCors = (req, res, next) => {

	res.header('Access-Control-Allow-Origin', '*');

	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, application/json;charset=UTF-8');
	//Handle Preflight
	if (req.method === 'OPTIONS') {
	res.status(200).send();
	}
	else {
	next();
	}
	}

app.use(customizedCors);

var date = new Date(); 
var msg = {
    greetings: "Hello world from marvelous Innocent at GitHub codespace. The Year is coming to an end in the next few days, and God has been faithful and forever will remain faithful",
    date: `${date.getDay()} : ${date.getMonth()} : ${date.getYear()}`,
}

app.get('/', (req, res) => {
    res.json(msg);
})

app.use('/static', express.static(path.join(__dirname+'/frontend/')));


app.listen(PORT, () => {
    console.log(`Server listening from Port ==> ${PORT}`);
})
