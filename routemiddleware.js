'use strict'

var express = require('express');
var app = express();
var router = express.Router();

/*
 Router level middleware
 middleware is bound to the router

 */

router.use(
    (req, res, next) => {
        console.log(
            `
            no path in this middleware mount
            date is on ${Date.now()}
            `);
        next();
    }
);

router.get('/'
    , (req, res, next) => {
        res.send('check console')
    }
)

router.get('/skip/:id'
    , (req, res, next) => {
        if (req.params.id == 1) next('route');
        else next();
    }, (req, res, next) => {
        res.send('no skip')
    }
)

router.get('/skip/:id'
    , (req, res, next) => {
        res.send('skipped')
    })

//mount the router to the app
app.use('/router', router);

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});



