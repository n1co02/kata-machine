class TrieNode {
    public isWord: boolean;
    public children: Map<string, TrieNode>;

    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}

export default class Trie {
    public head: TrieNode;

    constructor() {
        this.head = new TrieNode();
    }

    insert(item: string): void {
        let curr = this.head;

        for (const char of item) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }
            curr = curr.children.get(char)!;
        }

        curr.isWord = true;
    }

    delete(item: string): void {
        this.deleteHelper(item, this.head, 0);
    }

    private deleteHelper(
        item: string,
        node: TrieNode | undefined,
        depth: number,
    ): boolean {
        if (!node) return false;

        if (depth === item.length) {
            if (node.isWord) {
                node.isWord = false;
                return node.children.size === 0;
            }
            return false;
        }

        const char = item.charAt(depth);
        const childNode = node.children.get(char);
        const shouldDelete = this.deleteHelper(item, childNode, depth + 1);

        if (shouldDelete) {
            node.children.delete(char);
            return node.children.size === 0 && !node.isWord;
        }

        return false;
    }

    find(partial: string): string[] {
        let results: string[] = [];
        let curr = this.head;

        for (const char of partial) {
            if (curr.children.has(char)) {
                curr = curr.children.get(char)!;
            } else {
                return results;
            }
        }

        this.collectAllWords(curr, results, partial);
        return results;
    }

    private collectAllWords(node: TrieNode, results: string[], path: string) {
        if (node.isWord) {
            results.push(path);
        }

        for (let [char, childNode] of node.children) {
            this.collectAllWords(childNode, results, path + char);
        }
    }
}
