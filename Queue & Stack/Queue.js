
class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue(){
        this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }
}

const queueObj = new Queue();

queueObj.enqueue(1);
queueObj.enqueue(2);
queueObj.enqueue(3);

queueObj.dequeue();

console.log(queueObj.peek());

console.log(queueObj.queue);