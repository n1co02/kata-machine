type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item, next: this.head };
        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length)
            throw new Error("Index out of bounds");
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        const newNode: Node<T> = { value: item };
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            current = current!.next;
        }

        newNode.next = current!.next;
        current!.next = newNode;
        this.length++;
    }

    append(item: T): void {
        const newNode: Node<T> = { value: item };
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.head.value === item) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.length--;
            return removedValue;
        }

        let current = this.head;
        while (current.next && current.next.value !== item) {
            current = current.next;
        }

        if (current.next) {
            const removedValue = current.next.value;
            current.next = current.next.next;
            this.length--;
            return removedValue;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;

        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length)
            throw new Error("Index out of bounds");

        if (!this.head) return undefined;

        if (idx === 0) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.length--;
            return removedValue;
        }

        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
            if (!current.next) return undefined;
            current = current!.next;
        }

        const removedValue = current.next!.value;
        current.next = current.next!.next;
        this.length--;
        return removedValue;
    }
}
