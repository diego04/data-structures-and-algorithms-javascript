'use strict'

var express = require('express')
var app = express();

/*
    application level middleware
    middleware is bound to app instance
    through app.use and app.method
 */

//no path mounted so this middleware is applied to all requests unto the app
app.use((req, res, next)=> {
    console.log(`Time ${Date.now()}`);
    next();
})

//app level middleware mounted to that path
//used on all http request methods
app.use('/user/:id'
    , (req, res, next) => {
        console.log(`Request.type ${req.method}`)
        next();
    }
)

//mount middleware sub-stack for the given path unto app
app.use('/print/:id'
    , (req, res, next) => {
        console.log(`Req URL: ${req.originalUrl}`);
        next();
    }
    , (req, res, next)=> {
        console.log(`Req Type: ${req.method}`);
        next();
    }
)

//handler for the path
app.get('/print/:id'
    , (req,res,next) =>{
        console.log(`${req.params.id}`);
        next();
    }
    , (req, res, next)=> {
        res.send('check console')
    })

//this is a route with its handler function/middleware system
app.get('/user/:id', (req, res, next) => {
    res.send('good')
})


//passing to muliple routes
app.get('/skip/:id'
    , (req,res,next) => {
        console.log(1)
        if (req.params.id == 1) next('route')
        else next();
    }
    , (req,res,next) => {
        res.send('not skipped')
    }
)

app.get('/skip/:id'
    , (req,res,next) => {
        res.send('skipped')
    }
)


app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});
