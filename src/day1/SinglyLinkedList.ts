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
        this.insertAt(item, 0);
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length)
            throw new Error("Index out of bounds");
        const newNode: Node<T> = { value: item, next: this.head };
        if (idx === 0) this.head = newNode;
        if (idx !== 0) {
            newNode.next = undefined; //for append
            let current = this.head;
            for (let i = 0; i < idx - 1; i++) current = current!.next;

            if (idx !== this.length) newNode.next = current!.next; //for append
            current!.next = newNode;
        }
        this.length++;
    }

    append(item: T): void {
        const newNode: Node<T> = { value: item };
        if (!this.head) this.head = newNode;
        if (this.head) this.insertAt(item, this.length);
    }

    remove(item: T): T | undefined {
        if (!this.head) return undefined;

        let index = 0;
        if (this.head.value === item) return this.removeAt(index);

        let current = this.head;
        while (current.next) {
            index++;
            if (current.next.value === item) return this.removeAt(index);

            current = current.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) return undefined;

        let current = this.head;
        for (let i = 0; i < idx; i++) current = current!.next;

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
