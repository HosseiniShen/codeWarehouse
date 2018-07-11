import LinkedListNode from './LinkedListNode'
import Comparator from '../../utils/Comparator'

export default class LinkedList {
    constructor (compareFunction) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(compareFunction)
    }

    // Make a new Node to be a head of the linked List
    prepend (value) {
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode
        // Only one Node in the Linked List
        // If there is no tail yet let's make new node a tail.
        this.tail = this.tail || newNode
        return this;
    }

    append (value) {
        const newNode = new LinkedListNode(value)

        // If there is no head yet, make a new head
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }
        // append new node to the end of linked list
        this.tail.next = newNode;
        this.tail = newNode
        return this;
    }

    delete (value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        while (this.head && this.compare.equal(this.head.value, value)) {
            deleteNode = this.head;
            this.head = this.head.next
        }

        // TODO:if head equal
        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next
                } else {
                    currentNode = currentNode.next
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode
        }

        return currentNode;
    }

    find ({value = undefined, callback = undefined}) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head

        while (currentNode) {
            // If callback is specified then try to find node by callback
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // If value is specified then try to find node by value
            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next
        }
    }

    // remove the head of linked list
    shift () {
        if (!this.head) {
            return null
        }

        const deleteHead = this.head
        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }

        return deleteHead
    }

    // remove the tail of the linked list
    pop () {
        if (this.tail === this.head) {
            const deleteTail = this.tail
            this.head = null
            this.tail = null

            return deleteTail
        }

        const deleteTail = this.tail
        let currentNode = this.head
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null
            } else {
                currentNode = currentNode.next
            }
        }

        this.tail = currentNode
        return deleteTail
    }

    toArray () {
        let nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nodes;
    }

    toString (callback) {
        return this.toArray().map(node => node.toString(callback)).toString()
    }

}