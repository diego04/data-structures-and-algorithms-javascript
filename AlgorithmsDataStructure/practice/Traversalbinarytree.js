/*
    Reverse Level Order Traversal Binary Tree

    Scope
    Binary Tree
    Queue // F.I.F.O
    Stack // L.I.F.O

    Strategy
    Have a place holder variable
    Queue contains discovered but not visited vertices
    Stack

    Queue - when visited, dequeue it and
    put the deququed item to the place holder
    have its children enqueue to the queue
    starting with right child

    when finished push the placeholder element
    to the stack and replace the current placeholder
    with an element to be dequueu
    In other words repeat step above



 */


/*
    Level Order Traversal
 */

/*
    Reverse sort a binary tree
 */