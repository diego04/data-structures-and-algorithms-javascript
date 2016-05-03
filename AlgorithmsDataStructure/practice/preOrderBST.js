/*

    Check if a given  array can represent Preorder Traversal BST
    Given an array of numbers return true if a given array can represent
    pre order traversal BST

    else return False
    expected O(n)

    1. Pre order would look like Root Left Right
    2. BST is anything in left tree is less than parent
    3. Anything in right tree is greater than parent

    So the array is not sorted
    But it is separated in trees(left, right)
    kinda like log N base 2

    [root,...leftTree, ...rightTree]

    anything in the right tree is greater than
    leftTree and root

    anything in the left tree is less than root
    and rightTree

    root is in the middle or equal to the
    first parent in the right tree

    we find the rightTree by finding the first
    value greater than the current parent

    so anything before the main parent of the right tree "rightTree[0]"
    is less than parent of the right tree

    then do recursion


 */
