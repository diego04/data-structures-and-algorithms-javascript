/*
    When a string is the same read forward and backward

    remove all spaces
    fix case sensitivity

    if length =1 return true
    if not shift array and pop last element
    if they are both equal repeat step

*/


var palindrome = (arr) => {

    var arr = arr.replace(/\s/g, '');
    var arr = arr.toLowerCase();
    var arr = [...arr]

    console.log(arr)

    while(arr.length>0){


        var front = arr.shift()
        var back = arr.pop()
        console.log(arr)


        if (front != back) {
            return false
        }
    }
    return true

}

console.log(palindrome('A but tuba'))