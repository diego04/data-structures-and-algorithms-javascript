/*
    Djikstra uses BFS with a greedy strategy to find
    distances between two nodes

    initially djikstra assigns initial values from
    one point to another

    then iteratively improve the assigned initial
    values if possible

    the initial values stored in a matrix will be
    compared to calculated tenative distance

    our djikstra does not account for negative weights

    1. set distance to each node as infinity
    2. set all nodes as unvisited and at to Q
    3. initialize a node with distance 0 and status as visited
    4. pop the node with smallest distance to dis[node]
    5. calculate distance between current node and its neighbours set
    6. compare tenative distance with stored path
    7. pick shorter path

 */