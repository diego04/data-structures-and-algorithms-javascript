/*

    DP
    -> careful brute force
    -> guessing recursion + memoization
    -> to find optimum sol (ie: min, max )
    -> kinda like shortest path in a dag

    Dynamic programming in 5 easy steps:
    1. Define the sub problem
    2. Guess some part of the solution
    3. Recurrence // check this recurrence is acyclic
    4. Recurse + memoize  OR  bottom-up (find topological order)

    Time is # subproblem * (time per subproblem)

    5. Check if you can solve it


    STEPS
    1. How to find subproblem
    1.1 Subproblems for strings / Sequences
    -- use prefixes or suffixes

    prefix x[i:]  //linear
    suffix x[:i]  //linear
    substrings x[i:j]   //n^2

    usually just choose prefix
    usually just choose suffix
    if not use substrings



 1.2 Parenthization
    - optimal evaluation of associative expression
    - like the bridge riddle



 */



