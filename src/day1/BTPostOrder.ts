export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
function walk(current: BinaryNode<number> | null, path: number[]): number[] {
    if (!current) return path;

    walk(current.left, path);
    walk(current.right, path);
    path.push(current.value);
    return path;
}
