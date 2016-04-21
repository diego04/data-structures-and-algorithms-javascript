/*
    Linked list:
    Sequence of data structure connected together by links
    Each element contains a connection to other links

    Types:
    Circular
    Doubly
    Single [only goes forward]
 */

class Link{
    constructor(nextKey,object){
        this.next = nextKey;
        this.object = object;
    }

    getNext(){
        return this.next
    }
    getLink(){
        return this.object
    }
}
class LinkedList {
    constructor(head){
        if (head){
            this.head = head
        }
    }

    getLength(){

    }
    getHead(){

    }
    search(){

    }
    addNext(){

    }
    getCurrent(){

    }
    getNext(){

    }


}