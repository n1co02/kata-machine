export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: (BinaryNode<number> | null)[] = [head];
    while (queue.length) {
        let current = queue.shift() as BinaryNode<number>;
        if (current?.value === needle) return true;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}
