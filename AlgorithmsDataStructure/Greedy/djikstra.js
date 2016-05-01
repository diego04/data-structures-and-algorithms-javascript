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
    2. set all nodes as unvisited and add to Q
    3. initialize a node with distance 0 and status as visited
    4. pop the node with smallest distance to dis[node]
    5. calculate distance between current node and its neighbours set
    6. compare tenative distance with stored path
    7. pick shorter path

 */


var djikstra = (graph,sourceId) =>{

    var Q = []
    var distance = []
    var parent = []

    for (var nodeId in graph){
        distance[nodeId] = 'infinity'
        parent[nodeId] = null
    }

    Q.push(sourceId)
    distance[sourceId] = 0

    while (Q.length > 0){


        /*
         but actually use a heap not this thing below
         */
        Q.sort(function(a,b){
            if(distance[a] > distance[b]){
                return 1;
            }
            if(distance[a] < distance[b]){
                return -1;
            }
            if(distance[a] == distance[b]){
                return 0;
            }

        })

        var head = Q.shift()

        for(var childId in graph[head]){
            var distanceHolder = graph.length(head,childId)

            if(distance[childId] > distanceHolder + distance[head] ){
                distance[childId] = distanceHolder + distance[head]
                parent[childId] = head
            }
        }
    }
}