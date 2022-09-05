export function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    if (node.row > 0)
        neighbors.push(grid[node.row - 1][node.col]);
    if (node.row < grid.length - 1)
        neighbors.push(grid[node.row + 1][node.col]);
    if (node.col > 0)
        neighbors.push(grid[node.row][node.col - 1]);
    if (node.col < grid[0].length - 1)
        neighbors.push(grid[node.row][node.col + 1])
    return neighbors.filter(neighbor => !neighbor.isVisited)
}