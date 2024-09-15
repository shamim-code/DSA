/*

 *** Node is actually a object with value and pointer properties***


1. Create a new node class
 #constructor
 #initialize data and pointer

2. Create a linked list class
3. In the linked list class add these things-

#constructor
#push => Add a new node at the end of the list
#unshit => Add a new node at the begining of the list
#insert => Add a new node at a specific position

 */


// Creating a new node

class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}


// Creating a LinkedList

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unShift(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode
            this.length ++;
            return this;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            this.length ++;
            return this;
        }
    }

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    shift(){
        if(!this.head){
            return console.log("Empty Linked List");
        }

        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }

    pop(){

        if(!this.head){
            return console.log("Empty Linked List");
        }

        let temp = this.head
        let pre = this.head;

        while(temp.next){
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }

        return this;
    }

    traversing(){
        let current = this.head;
        let text = "";
        while(current){
            console.log(current.data+ " =>");
            current = current.next;
        };
    }
}

let MylinkedList = new LinkedList();

MylinkedList.push(2);
MylinkedList.push(3);
MylinkedList.push(4);
MylinkedList.unShift(44);

MylinkedList.traversing();


