export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);

    const dist = new Array(arr.length).fill(Infinity);
    const prev = new Array(arr.length).fill(-1);

    dist[source] = 0;

    while (hasUnvisited(seen, dist)) {
        const curr = getLowestUnvisited(seen, dist);

        seen[curr] = true;
        const adjs = arr[curr];
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i];
            if (seen[edge.to]) continue;

            const distance = dist[curr] + edge.weight;
            if (distance < dist[edge.to]) {
                dist[edge.to] = distance;
                prev[edge.to] = curr;
            }
        }
    }

    const out: number[] = [];
    let curr = sink;

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    out.push(source);
    return out.reverse();
}

function hasUnvisited(seen: boolean[], dist: number[]): boolean {
    return seen.some((s, i) => !s && dist[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dist: number[]) {
    let idx = -1;

    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) continue;

        if (lowestDistance > dist[i]) {
            lowestDistance = dist[i];
            idx = i;
        }
    }
    return idx;
}
