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
): boolean => {
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    )
        return false;
    return true;
};
