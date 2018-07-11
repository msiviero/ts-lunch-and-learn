class Queue<T> {
    private data: T[] = [];

    public push(item: T) {
        this.data.push(item);
    }

    public pop = (): T | undefined => this.data.shift();
}

const queue = new Queue<string>();
queue.push("Marco");

console.log(queue.pop());
