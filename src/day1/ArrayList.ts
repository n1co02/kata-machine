export default class ArrayList<T> {
    public length: number;
    public data: T[];

    constructor(length: number) {
        this.length = length;
        this.data = [];
    }

    prepend(item: T): void {
        this.data.unshift(item);
        this.length = this.data.length;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.data.length)
            throw new Error("Index out of bounds");

        this.data.splice(idx, 0, item);
        this.length = this.data.length;
    }

    append(item: T): void {
        this.data.push(item);
        this.length = this.data.length;
    }

    remove(item: T): T | undefined {
        const filteredItem = this.data.indexOf(item);
        if (filteredItem === -1) return undefined;
        this.length--;
        return this.data.splice(filteredItem, 1)[0];
    }

    get(idx: number): T | undefined {
        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.data.length) return undefined;

        this.length--;
        return this.data.splice(idx, 1)[0];
    }
}
