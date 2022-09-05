import { getUnvisitedNeighbors } from "./getNeighbours";
import { getShortestPath } from "./getShortestPath";
import { sortNodesByfScore } from "./sortNodes";

export function astar_search(grid, startNode, endNode) {
    const openSet = [];
    const visitedNodes = [];

   
    startNode.isVisited = true;
    startNode.distance = 0;
    startNode.fScore = Math.abs(startNode.row - endNode.row) + Math.abs(startNode.col - endNode.col);
    openSet.push(startNode);
    while (openSet.length > 0) {
        sortNodesByfScore(openSet)
        const curr_node = openSet.shift();
        visitedNodes.push(curr_node);

        if (curr_node === endNode)
            return [visitedNodes, getShortestPath(endNode)];

        const neighbors = getUnvisitedNeighbors(curr_node, grid);
        for (const neighbor of neighbors){
            if (neighbor.isWall) continue;
            
            neighbor.isVisited = true;
            const tempGScore = curr_node.distance + findDistanceWithNeighbor(curr_node, neighbor);
            if (tempGScore < neighbor.distance){
                neighbor.previousNode = curr_node;
                neighbor.distance = tempGScore;
                neighbor.fScore = tempGScore + heuristics(neighbor, endNode);
                if (!openSet.includes(neighbor)){
                    openSet.push(neighbor);  
                }   
            }
        }
    }
    return [visitedNodes, []];
}

function heuristics(node, endNode){
    return Math.abs(node.row - endNode.row) + Math.abs(node.col - endNode.col);
}

function findDistanceWithNeighbor(nodeA, nodeB){
    return Math.abs(nodeA.row - nodeB.row) + Math.abs(nodeA.col - nodeB.col);
}
