/**
 * This module is an implementation of a linked list and contains 
 * various methods that perform basic operations.
 */

const SinglyLinkedList = {
    head: null,
    nodeCount: 0,

    /**
     * The node() method represents a single node in the list
     * @param {*} data 
     */
    node(data) {
        this.data = data;       // the value of the node
        this.next = null;       // the next node in the list
    },

    /**
     * The addToHead() method adds an item to head of the linked list and 
     * returns the number of nodes in the list.
     * 
     * @param {*} data The value of the node to add to the list
     */
    addToHead(data) {
        const node = this.node(data);
        const currentNode = this.head;
        // add node to an empty list
        if(!currentNode) {
            this.head = node;
        } 
        // add node to a non-empty list
        else {
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this.nodeCount++;
    },

    /**
     * The addToTail() method adds an item to tail of the linked list and 
     * returns the number of nodes in the list.
     * 
     * @param {*} data The value of the node to add to the list
     */
    addToTail(data) {

    },

    

    /**
     * The delete() method 
     * 
     * @param {*} data The value of the node to remove from the list
     */
    delete(data) {

    },

    search(data) {

    },
    
    list(data) {

    },

    getLast(data) {

    }
};

const DoublyLinkedList = {};

SinglyLinkedList.addToHead(20);
SinglyLinkedList.addToHead(30);
SinglyLinkedList.addToHead(40);

console.log(SinglyLinkedList.nodeCount);
console.log(SinglyLinkedList.node.next);

//export default SinglyLinkedList;