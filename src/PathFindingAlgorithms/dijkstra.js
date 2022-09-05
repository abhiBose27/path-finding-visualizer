import { getUnvisitedNeighbors } from "./getNeighbours";
import { getShortestPath } from "./getShortestPath";
import { sortNodesByDistance } from "./sortNodes";

export function Dijkstra(grid, startNode, endNode){
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);

    while (!!unvisitedNodes.length){
        sortNodesByDistance(unvisitedNodes);
        const closest_node = unvisitedNodes.shift();

        if (closest_node.isWall)
            continue;
        if (closest_node.distance === Infinity)
            return [visitedNodesInOrder, []];
        closest_node.isVisited = true;
        visitedNodesInOrder.push(closest_node);
        if (closest_node === endNode) 
            return [visitedNodesInOrder, getShortestPath(endNode)];
        updateUnivisitedNeighbors(closest_node, grid);
    }

}


function getAllNodes(grid){
    const nodes = [];
    for (const row of grid){
        for (const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}

function updateUnivisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (let neighbor of unvisitedNeighbors){
        const tempDis = node.distance + 1;
        if (tempDis < neighbor.distance)
            neighbor.distance = tempDis;
            neighbor.previousNode = node;
    }
}


