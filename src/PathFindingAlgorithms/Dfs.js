import { getUnvisitedNeighbors } from "./getNeighbours"

function dfs(visitedNodes, grid, startNode, endNode, path) {
    
    startNode.isVisited = true;
    if (!visitedNodes.includes(startNode))
        visitedNodes.push(startNode);
    path.push(startNode);

    if (startNode === endNode)
        return true;

    const neighbors = getUnvisitedNeighbors(startNode, grid);

    for (const neighbor of neighbors){
        if (neighbor.isWall)
            continue;
        if (dfs(visitedNodes, grid, neighbor, endNode, path))
            return true;
    }
    path.pop();
    return false;
}

export function DepthFirstSearch(grid, startNode, endNode){
    const visitedNodes = [];
    const path = [];
    dfs(visitedNodes, grid, startNode, endNode, path);
    return [visitedNodes, path];
}
