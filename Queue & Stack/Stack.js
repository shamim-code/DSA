
class Stack {
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length -1]
    }
}

const stackObj = new Stack();


stackObj.push(1);
stackObj.push(2);

console.log(stackObj.peek());
stackObj.pop();

console.log(stackObj.stack);