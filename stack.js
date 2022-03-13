class Stack {
    constructor(){
        this.storage = {}
        this.count=0
    }
    push(value){
      this.storage[this.count]=value
      this.count++
    }
    open(){
        return this.storage;
    }
}
const newStack = new Stack();
newStack.push(20)
newStack.push(40)
newStack.push(70)
newStack.push(80)

console.log(newStack)
console.log(newStack.open())