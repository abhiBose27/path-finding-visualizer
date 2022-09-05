import { astar_search } from "../../PathFindingAlgorithms/AStar";
import { bfs } from "../../PathFindingAlgorithms/Bfs";
import { DepthFirstSearch } from "../../PathFindingAlgorithms/Dfs";
import { Dijkstra } from "../../PathFindingAlgorithms/dijkstra";

export function getAnimationsAlgoList(grid, start_pos, end_pos, algorithm) {
    const startNode = grid[start_pos.row][start_pos.col];
    const finishNode = grid[end_pos.row][end_pos.col];
    var visitedNodesInOrder = [];
    var shortestPath = [];
    switch (algorithm) {
        case 'Dijkstra':
            [visitedNodesInOrder, shortestPath] = Dijkstra(grid, startNode, finishNode);
            break;
        case 'DFS':
            [visitedNodesInOrder, shortestPath] = DepthFirstSearch(grid, startNode, finishNode);
            break
        case 'BFS':
            [visitedNodesInOrder, shortestPath] = bfs(grid, startNode, finishNode);
            break;
        case 'A *':
            [visitedNodesInOrder, shortestPath] = astar_search(grid, startNode, finishNode);
            break;
        default:
            break;
    }
    return [visitedNodesInOrder, shortestPath];
}