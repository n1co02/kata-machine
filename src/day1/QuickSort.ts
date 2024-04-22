export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], low: number, high: number): void {
    if (low < high) {
        const pi = partition(arr, low, high);
        qs(arr, low, pi - 1);
        qs(arr, pi + 1, high);
    }
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let idx = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }
    idx++;
    arr[high] = arr[idx];
    arr[idx] = pivot;

    return idx;
}
