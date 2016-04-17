var express = require('express')
    , app = express()


app.get('/'
    , (req, res) => {
        res.send('hello')
    }
)

app.get('/err'
    , (req, res) => {
        throw new Error('oh no!')
        res.send('err')
    }
)

app.get('*'
    , (req, res) => {
        res.status(404).send('404')
    }
)

app.use(
    (err, req, res, next) => {
        console.log(err.stack)
        res.status(500)
        res.send('something broke')
    }
)

app.listen(8000, function () {
    console.log('Example app listening on port 3000!');
});
