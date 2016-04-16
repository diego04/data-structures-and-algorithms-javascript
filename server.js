'use strict'
var express = require('express');
var bodyParser = require('body-parser')


var app = express();

app.get('/', function (req, res) {
    res.send('refresher for es6 using express. some harmony features are not supported yet');
})


app.get('/shorthand', function(req,res){

    var shorthandObject = {
        name: 'Bruce',
        getOwner() { return this.name + " Wayne"; }
    };

    res.send(shorthandObject.getOwner())

})

app.get('/classes', (req,res) => {

    class Person{
        constructor(first,last){
            this.first = first;
            this.last = last;
        }

        getPerson(){
            return `${this.first} ${this.last}`;
        }
    }

    console.log(new Person('Kevin', 'De Asis').getPerson())
   res.send('classes are a thing now')
});

app.get('/', (req,res)=>{

    class Animal{
        constructor(legCount, sound){
            this.legCount = legCount;
            this.sound = sound
        }

        getSound(){
            return this.sound;
        }
    }

    class Mammal extends Animal{

    }

    res.send('class extensions')
})
app.get('/templatestrings', (req,res) => {

    let movie = 'game of thrones'
    console.log(`${movie} is a tv show that i cant wait to come out`)

    var longline = `some paragraph with newlines
    newline1
    newlin2
    newline3
    ${movie}`

    console.log(longline)

    res.send('template strings')
})

app.get('/defaultparameters',(req,res) => {
    //let x = (firstname = 'jon', lastname = 'doe')=> firstname+ ' ' +lastname;
    //console.log(x)

    /*
    function name(a="a"){
        console.log(a)
    }
    name()
    */

    res.send('default parameters is a no go')
})
app.get('/arrowfunction', function (req, res) {

    //lexical scope for 'this' is the function that defines it not the caller relative to regular functions

    //arrow functions are cool for anonymous functions
    var values = [1, 2, 3, 4, 5, 6, 7]
    var even = values.filter(x => x % 2 === 0) //filter returns new array from elements that pass test in a function
    var evenSquare = even.map(x => x * x) //map returns new array from the result of the passed function
    console.log(evenSquare)

    let NotGood = () => {
    }
    //let wontWork = new NotGood() //type Error
    //

    res.send(
        myNewFunction("ei")
    );
});

app.get('/objectdesctructuring', function (req, res) {

    /*
     useful for getting multiple results from a return function
     or from passing json as obj and obtaining those value through destructuring
     var person = {
     first: 'Marsellus',
     last: 'Wallace'
     };
     let { first, last } = person;

    let [first, ...remaining] = [1, 2, 3, 4, 5];
    console.log(first);
    console.log(remaining);
    */

    res.send('not supported in this engine')

});


app.get('/blockscope', function (req, res) {

    var a = 'lexical scope';

    (function oldblockscope() {
            var a = "old way to do blockscope"
            console.log(a)
        }
    )();


    {
        let a = 'es6 block scope'
        res.send(a)
    }
    console.log(a)

})

app.get('/arraydestructuring', function(req,res){

    /*
    let [a,b,c] = [1,2,3];
    console.log(a + " " + b)
    [b,a,c] = [a,b,c];
    console.log(a + " " + b)

    let [,,third] = [1,2,3];
    console.log(third)*/
    res.send('not supported')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

var myOldFunction = function (arg) {
    return arg.toUpperCase();
};

var myNewFunction = (arg) => arg.toUpperCase()


