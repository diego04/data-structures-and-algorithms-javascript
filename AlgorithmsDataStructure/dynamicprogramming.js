/*
    Recurring optimal solution  that can be used on each sub problem

    polynomial complexity

    THE CONTEXT
    given an array of sacks
    a sack contains a certain weight, call it P[i].w // i is the ith element and w is the weight property
    given a number S

    THE PROBLEM
    find the minimum combinations  of sacks to reach S

    THE PROCESS
    find a state (sub-solution )that is a sub-solution to a sub-problem
    a sub-solution is I wherein I <= S
    a state for I could J wherein J <= I

    So, solve a state and store it for later use in order to solve
    a state that belongs to a higher hierarchy state


    fibonacci numbers
    longest common subsequence/substring

    Knapsack
    Longest Palingdrome
 */

/*
    Note: fix bindings later
 */
var fibonacci = (n) => {
    // expoenential time
    // recurrentce T(n) = T(n-1)+T(n-2) + O(n)
    // verify by induction

    /*
        T(0) = 1
        T(1) = 1

        T(n) = T(n-1) + T(n-2) + c
        Say T(n) = 2 T(n-2) + c // theta

        T(n-2) = T(n-3) + T(n-4) + c
        Say T(n-2) = 2 T(n-4) + c // theta

        T(n-4) = T(n-5) + T(n-6)
        Say T(n-4) = 2 T(n-6) + c // theta

        T(n-6) = T(n-7) + T(n-8)
        Say T(n-6) = 2 T(n-8) + c // theta

        T(n) = 2 T(n-2) = 2*2 T(n-4) = 2*2*2 T(n-6)

        General form
        T(n) = 2^k T(n-2k)
        n-2k = 0
        k = n/2

        T(n) = 2^(n/2) T(0)

     */
    if (n< 2) return 1
    else return (fibonacci(n-1)+fibonacci(n-2))
}

/*
    Memoized Dynamic Porgramming
 */

var memo = []

var dynamicfib = (n) => {

    if (memo[n]) return memo[n]

    if(n < 2) return 1
    else{
        memo[n] = dynamicfib(n-1)+dynamicfib(n-2)
        return memo[n]
        /*
        var val1
        var val2
        if(memo[n-1]) val1 = memo[n-1]
        else val1 = dynamicfib(n-1); memo[n-1]=val1

        if(memo[n-2]) val2 = memo[n-2]
        else val2 = dynamicfib(n-2); memo[n-2]=val2

        return val1+val2
        */
    }
}