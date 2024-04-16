export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    while (low < high) {
        //weil ich nur haystack.length verwende nicht haystack.length-1
        const mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];
        if (value === needle) return true;
        if (value > needle) high = mid;
        if (value < needle) low = mid + 1;
    }
    return false;
}
