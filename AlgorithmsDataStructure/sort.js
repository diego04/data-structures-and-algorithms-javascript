/*
    merge sort
    (n log n)
    divide and conquer

    use a procedure to merge two sorted arrays into a new array
    move the pointer of an array to the next element of the
    element appended to the new array

    continue iterating and comparing over the values of the pointers
    in order to append them to the merged array

    //erm use ycombinator for recursive anonymous function?


    //try this out later

    var mergeSort = (Array) =>{

        if (Array.legth < 2) {
            //base case
            return Array
        }

        var Array1 = Array[Array[0],...Array[Array.length//2]]
        var Array2 = [Array[(Array.length//2)+1],...Array[Array.length - 1]]

        a = mergeSort(Array1) // 1 2
        b = mergeSort(Array2) // 3

        return merge(Array1,Array2) //sorted array
    }

    var merge = (Array1, Array2) => {
        var sorted = []

        while(Array1.length && Array2.right) {
            if(Array1[0] < Array2[0]) {
                sorted.append(Array1.shift())
            }else if (Array2[0] < Array1[0] ) {
                sorted.append(Array2.shift())
            }else if (Array2[0] == Array1[0]){
                sorted.append(Array2[0].shift())
                sorted.append(Array2[0].shift())
            }
       }

       return [sorted,...Array1,...Array2]

    }
 */