
/* 

1. Create a node 
2. Create a LinkedList

*/


class Node{

    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data){
        /* 
            1. If length 0 add to first
            2. Else add to last
        */

            const newNode = new Node(data);

            if(this.size === 0){
                this.head = newNode;
                this.tail = newNode;
                this.size ++;
            }else{
                
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
                this.tail.next = null;
                this.size ++;
            }

            return this;
    }

    pop(){

        if(this.size === 0){
            console.log("Liked list is already empty !");
        }else{

            let curruentTail = this.tail;
            this.tail = this.tail.prev;
            curruentTail.prev = null;
            this.size --;

            console.log(this.size);

            if(this.size === 0){
                this.head = null;
                this.tail = null;
                
            }
        }
    }

    traverse(){

        let current = this.head;

        while(current){
            console.log(current.data + ' => ');
            current =current.next;
        }
    }
}


const myLinkedList = new LinkedList();

myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(2);
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();

myLinkedList.traverse();