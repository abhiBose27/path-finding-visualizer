export function sortNodesByDistance(unvisitedNodes){
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

export function sortNodesByfScore(openSet){
    openSet.sort((nodeA, nodeB) => nodeA.fScore - nodeB.fScore);
}