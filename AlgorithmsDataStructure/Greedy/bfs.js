
var bfs = (G,R) =>{

    var parent = []
    var distance = []
    var Q = []

    for (var node in G){
        parent[node] = null
        distance[node] = 'infinity'
    }

    Q.push({id:R,distance:0})
    distance[R] = 0

    while (Q.length > 0){
        var head = Q.shift()
        for (var x in G[head]){
            if (distance[x] == 'infinity'){
                distance[x] = head.distance + 1
                parent[x] = head.id
                Q.push({id:x,distance:distance[x]})
            }
        }
    }
    return {parent,distance}
}

/*
BFS uses Queue, which is a FIFO
to hold elements as it navigates
through the graph

We start by initializing an array
of dsitances and pointers to parent
with placeholder values for each
element

The initialized values are
infinity for distances
and pointing to their
parent with a value null

we intialize the queue
with the Root containing
a distance 0 and parent
null

We enter a while loop
that keeps iterating
as long as their as something
in the queue

In the while loop
we dequeue (shift()) to get
the element whose child we
will search

if the child has distance
infinity enqueue it and
change the distance with
the parent's distance+1
and assign the parent

when finished
return an object
with properties:
parents
distances

 */