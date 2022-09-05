import { getUnvisitedNeighbors } from "./getNeighbours";
import { getShortestPath } from "./getShortestPath";

export function bfs(grid, startNode, endNode){
    const queue = [];
    const visitedNodes = []
    startNode.isVisited = true;
    queue.push(startNode);
    while (queue.length > 0) {
        const current = queue.shift();
        visitedNodes.push(current);
        if (current === endNode)
            return [visitedNodes, getShortestPath(endNode)];
        const unvisitedneighbors = getUnvisitedNeighbors(current, grid);

        for (const neighbor of unvisitedneighbors){
            if (neighbor.isWall) continue;
            neighbor.isVisited = true;
            queue.push(neighbor);
            neighbor.previousNode = current;
        }
    }
    return [visitedNodes, []];
} 