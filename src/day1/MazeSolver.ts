export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}

const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
): boolean => {
    //check if of the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    )
        return false;

    if (maze[curr.y][curr.x] === wall) return false; //if wall

    if (curr.x === end.x && curr.y === end.y) return true; //if end

    if (seen[curr.y][curr.x]) return false; //if already visited

    return true;
};
