import Queue from 'yocto-queue';

const queue = new Queue();

queue.enqueue('B');
queue.enqueue('A');


console.log(queue.dequeue());
console.log(queue.size);