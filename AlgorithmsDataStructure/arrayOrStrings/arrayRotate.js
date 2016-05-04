/*
 Given an array size 'n'
 and a shift 'k'

 In O(n) time
 shift the elements of the array
 by k

 Just use modulo
 and have a place holder
 */

var arrayShift = (arr, shift) => {


    if (arr.length < 1) return []

    var newArray = []

    for (var x=0; x<arr.length;x++) {

        var index = (x+shift) % (arr.length) //6 mod 6 is 0
        console.log(index)
        newArray[index] = arr[x]

    }

    return newArray
}

var y = [1,2,3,4,5,6]
console.log(arrayShift(y,3))