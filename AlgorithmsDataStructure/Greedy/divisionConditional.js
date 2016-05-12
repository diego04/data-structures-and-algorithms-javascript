/*
    Divide two integers but only using
    + or -


 */



var divide = (x,y) => {

    var quotient = 0
    while(x >= y){
        quotient = quotient+1
        x = x-y
    }

    return quotient
}

console.log(divide(2,1.5))