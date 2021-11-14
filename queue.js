import Queue from 'yocto-queue';

const queue = new Queue();

queue.enqueue(['LMFAO', 'ASDFASDF']);
queue.enqueue(['Pitbull', '12341234']);

let name, id;
[name, id] = queue.dequeue();

console.log(name);
console.log(id);