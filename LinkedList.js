class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {

    }

    prepend(value) {

    }

    get size() {
        // return total number of nodes in list
    }

    get gethead() {
        // returns first node in list
    }

    get gettail() {
        // returns first node in list
    }

    at(index) {
        // returns the node at the given index
    }

    pop() {
        // removes last element
    }

    contains(value) {
        // returns true if list contains value
    }

    find(value) {
        // return index of node containing value, or null if not found
    }

    toString() {
        // represents LinkedList objects as strings
        // format: ( value ) -> ( value ) -> ( value ) -> null
    }

    // extra credit

    insertAt(value, index) {
        // inserts a node with 'value' at 'index'
    }

    removeAt(index) {
        // removes the node at 'index'
    }

}

export { LinkedList }