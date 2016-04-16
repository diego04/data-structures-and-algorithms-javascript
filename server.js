'use strict'
var express = require('express');
var bodyParser = require('body-parser')


var app = express();

app.get('/', function (req, res) {
    futureJavascript();
    res.send('oi');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


let futureJavascript = () => {
    let ES2015 = 'awesome';
    console.log(`The future of JavaScript is ${ES2015}`);
};


