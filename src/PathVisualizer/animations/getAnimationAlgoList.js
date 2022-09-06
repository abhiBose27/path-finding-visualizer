import { primsMaze } from "../../MazeGeneration/primsMaze";
import { randomMaze } from "../../MazeGeneration/randomMaze";
import { recursiveDivisionMaze } from "../../MazeGeneration/recursiveDivision";
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

export function getAnimationMazeList(grid, start_pos, end_pos, MazeType) {
    const startNode = grid[start_pos.row][start_pos.col];
    const endNode = grid[end_pos.row][end_pos.col];

    //var animationsList = []
    if (MazeType === 'Recursive-div')
        return recursiveDivisionMaze(grid, startNode, endNode);
    if (MazeType === 'Rand-maze')
        return randomMaze(grid);
    if (MazeType === 'Prim-maze')
        return primsMaze(start_pos, end_pos);
    //return animationsList;
}      