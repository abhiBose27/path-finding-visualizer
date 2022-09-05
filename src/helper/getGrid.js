import { COLS, ROWS } from "./constants";

function createNode(row, col, start_pos, end_pos) {
    var node = {
        row,
        col,
        isStart: row === start_pos.row && col === start_pos.col,
        isFinish: row === end_pos.row && col === end_pos.col,
        distance: Infinity,
        fScore: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null,
    };
    return node;
}


export function getGridToggledWall(grid, row, col) {
    const newGrid = grid.slice();
    const node = grid[row][col];
    if (node.isStart || node.isFinish)
        return newGrid;
    const newNode = {
        ...node,
        isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
}

export function gridDynamicNodes(grid, row, col, NodeType){
    let newGrid = grid.slice();
    const node = newGrid[row][col];

    const newNode = {
        ...node,
        isStart: NodeType === 'start' ? true : node.isStart,
        isFinish: NodeType === 'finish' ? true : node.isFinish,
        isWall: false,
    }

    newGrid[row][col] = newNode;
    return newGrid;
}

export function resetGridWithWalls(grid, start_pos, end_pos){
    const newGrid = [];
    for (let row = 0; row < ROWS; row++){
        const newRow = [];
        for (let col = 0; col < COLS; col++){
            const node = grid[row][col]
            const newNode = createNode(row, col, start_pos, end_pos);
            newNode.isWall = node.isWall;
            newRow.push(newNode);
        }
        newGrid.push(newRow);
    }
    return newGrid;
}

export function getInitGrid(start_pos, end_pos) {
    const grid = [];
    for (let row = 0; row < ROWS; row++){
        const currentRow = []
        for (let col = 0; col < COLS; col++){
            currentRow.push(createNode(row, col, start_pos, end_pos));
        }
        grid.push(currentRow);
    }
    return grid;
}

export function getGridWithMaze(grid, walls){
    let newGrid = grid.slice();
    for (let wall of walls) {
        let node = grid[wall[0]][wall[1]];
        let newNode = {
            ...node,
            isWall: true,
        };
        newGrid[wall[0]][wall[1]] = newNode;
    }
    return newGrid;
}