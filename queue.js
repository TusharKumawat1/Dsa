function Queue() {
    this.queue = {}
    this.front = 0
    this.rear = 0
}
Queue.prototype.enqueue = function(data) {
    this.queue[this.rear] = data;
    this.rear++;
};

Queue.prototype.dequeue = function() {
    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
};

Queue.prototype.isEmpty = function() {
    return this.rear - this.front === 0;
};

Queue.prototype.peek = function() {
    if (!this.isEmpty()) {
        return this.queue[this.front];
    }
};

Queue.prototype.print = function() {
    console.log(this.queue);
};
let q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.dequeue()
q.print()