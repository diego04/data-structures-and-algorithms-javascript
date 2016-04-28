/*

    //http://impactjs.com/ejecta

    //These are just notes. They act as a guide and are "pseudocode" and  might not work

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
    we have a bunch of sub problems
    we memorize the answer
    we re-use/recycle our answers to sub problems

    Memoization
    fib(1),fib(2).....fib(n)
    time = #subproblem * time per subproblem
    time per subproblem = O(1)
    dont count recursions

 */

var memo = []

var dynamicfib = (n) => {
    /*
        Time COmplexity: O(n) //linearly bound
        Space Complexity: ?
     */

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

/*
    bottom up
    its like a topological sort
    its like a dag

    you really just need the last 2 values
    so you can delete the rest after
    it saves you space complexity
 */

var bottomUpfib = (n) => {

    for( var x = 1; x < n+1; x++){
        if (n<2) var f = 1
        else f= memo[n-2]+memo[n-1]
        memo[x] = f
    }

    return memo[n]
}


/*
   Shortest Path

   remember non negative edges
   and acyclic

   Def
   [ ] This is a node
   [V] This is node named V

   [U] => [ ] => [ ] => [ ] => [V-1] => [V]
   Assume there are many nodeas  in the graph
   and adjacent nodes to [V]
   that are not drawn above

   Find the shortesst path from U to V

   Find all the edges adjacent to V
   Now you just have to find shortest
   path from U to V-1
   and then append edge of V-1 to V

   Given you've guessed the right choice
   of node/edge from V-1 to V
   you'll have the shortest path

   Most likely you'd want
   the edge of the node adjacent to V
   that contains the shortest edge
   and append that to the path
   S to V-1

   SO, essentially here
   we've only pretended that we
   knew the shortest path from
   S to V-1

   S to V-1 looks like a recursive call
   like Fibonacci we did earlier






 */

