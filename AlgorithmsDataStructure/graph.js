/*
    Graph
    V = {a , b , c ,d ,e}  // nodes
    E = {ab, ac, ad, de ,ce} //edges


    ========================================================
    DFS
    stack = [] // initialize stack of visited
    V[0].visited = true // mark them as visited
    stack.append(V[0])

    find adjacent to V[0]

    keep doing it
    when you arrive at a vertices that has no unvisited neighbour
    pop it from the stack

    see if the local item in the stack has a neighbour that is unvisited

    repeat process

    keep popping from the stack until stack is empty

    ========================================================
    BFS

    Queue = []
    Visit unvisited adjacent node and mark it visited
    Put it in a Queue

    Repeat until all adjacent are visited and pop element in the queue

    Repeat the steps

    ========================================================
    PATH FINDING
    Djikstra - shortest path between two nodes
    ========================================================



 */