
var DFS = (Graph,rootId) => {

    var stack = []
    var visited = []
    for (var x in Graph){
        visited[x] = false
    }
    stack.push(rootId)

    while (stack.length < 0){
        var aParent = stack.pop()
        if (visited[aParent] == false){
            visited[aParent] = true
            for (var aChild in Graph[rootId]){
                stack.push(aChild)
            }
        }
    }
}

/*

    DFS
    we have a stack //lifo
    that helps us navigate the depth

    initialize the stack with the root
    intialize the visited array with false

    while the stack is not empty keep iterating
    pop the last element and if it has not been
    visited, mark it as visited then
    find all its children and put
    them in the stack

 */