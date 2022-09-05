export function animateVisitedNodes(visitedNodesInOrder, shortestPath, speed){
    for (let i = 0; i < visitedNodesInOrder.length; i++){
        setTimeout(() => {
            const node = visitedNodesInOrder[i];
            setTimeout(() => {
                document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-current';
                setTimeout(() => {
                    document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
                }, speed);
            }, i * speed);
            if (i === visitedNodesInOrder.length - 1){
                if (shortestPath.length !== 0){
                    setTimeout(() => {
                        animateShortestPath(shortestPath, speed);
                    }, i * speed);
                }
                return;
            }
        }, i * speed);
    }
}

function animateShortestPath(shortestPath, speed) {
    for (let i = 0; i < shortestPath.length; i++){
        setTimeout(() => {
            const node = shortestPath[i];
            document.getElementById(`node-${node.row}-${node.col}`).className = `node node-shortest-path`; 
        }, i * speed);
    }
}