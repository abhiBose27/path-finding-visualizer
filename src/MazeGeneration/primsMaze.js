import { COLS, ROWS } from "../helper/constants";


let animationsWalls;
//let animationsTrack;
function getTempGrid() {
    let grid = [];
    for (let i = 0; i < ROWS; i++) {
        let row = [];
        for (let j = 0; j < COLS; j++)
            row.push(1);
        grid.push(row);
    }
    return grid;
}

export function primsMaze(start_pos, end_pos){
    let tempGrid = getTempGrid();
    animationsWalls = []
    for (let i = 0; i < ROWS; i++){
        for (let j = 0; j < COLS; j++){
            if ((i === end_pos.row && j === end_pos.col) || (i === start_pos.row && j === start_pos.col)) 
                continue;
            if (i % 2 === 1 || (j % 2 === 1 && j !== COLS - 1)) {
                tempGrid[i][j] = 0;
                //animationsWalls.push([i, j])
            }
        }
    }
    let sx = getRandomEvenArbitrary(0, COLS);
    let sy = getRandomEvenArbitrary(0, ROWS);
    
    prims(sx, sy, tempGrid);
    
    for (let i = 0; i < ROWS; i++){
        for (let j = 0; j < COLS; j++){
            if (tempGrid[i][j] === 0) 
                animationsWalls.push([i, j]);
        }
    }
    //console.log(tempGrid);
    return animationsWalls;
    // ROWS - 1 = 39, Outer range never included. sx will be between 0-38
}

function prims(x, y, grid) {
    //animationsTrack = []
    
    grid[y][x] = 0.5;
    //animationsTrack.push([y, x]);
    
    let adjacent = [];

    if (y + 2 < ROWS && grid[y + 2][x] === 1)
        adjacent.push([y + 2, x]);
    if (y - 2 >= 0 && grid[y - 2][x] === 1)
        adjacent.push([y - 2, x]);
    if (x + 2 < COLS && grid[y][x + 2] === 1)
        adjacent.push([y, x + 2]);
    if (x - 2 >= 0 && grid[y][x - 2] === 1)
        adjacent.push([y, x - 2]);

    while (adjacent.length > 0) {
        let randomNum = Math.floor(Math.random() * (adjacent.length - 0) + 0);
        let cell = adjacent[randomNum];

        let ny = cell[0];
        let nx = cell[1];

        let directions = [];

        grid[ny][nx] = 0.5;

        if (ny + 2 < ROWS && grid[ny + 2][nx] === 0.5)
            directions.push(1);
        if (ny - 2 >= 0 && grid[ny - 2][nx] === 0.5)
            directions.push(2)
        if (nx + 2 < COLS && grid[ny][nx + 2] === 0.5)
            directions.push(3);
        if (nx - 2 >= 0 && grid[ny][nx - 2] === 0.5)
            directions.push(4);
        
        randomNum = Math.floor(Math.random() * (directions.length - 0) + 0);
        let dir = directions[randomNum];

        if (dir === 1){
            grid[ny + 1][nx] = 0.5;
            //animationsTrack.push([ny + 1, nx]);
        }
        if (dir === 2){
            grid[ny - 1][nx] = 0.5;
            //animationsTrack.push([ny - 1, nx]);
        }
        if (dir === 3) {
            grid[ny][nx + 1] = 0.5;
            //animationsTrack.push([ny, nx + 1]);
        }
        if (dir === 4) {
            grid[ny][nx - 1] = 0.5;
            //animationsTrack.push([ny, nx - 1]);
        }
        
        if (ny + 2 < ROWS && grid[ny + 2][nx] === 1)
            adjacent.push([ny + 2, nx]);
        if (ny - 2 >= 0 && grid[ny - 2][nx] === 1)
            adjacent.push([ny - 2, nx]);
        if (nx + 2 < COLS && grid[ny][nx + 2] === 1)
            adjacent.push([ny, nx + 2]);
        if (nx - 2 >= 0 && grid[ny][nx - 2] === 1)
            adjacent.push([ny, nx - 2]);   
            
       
        adjacent = removeDuplicates(adjacent);
        adjacent = adjacent.filter((ele) => {
            return !arrEqual(ele, cell);
        });

    }
}

function arrEqual(arr1, arr2) {
    return arr1.every((val, index) => val === arr2[index]);
}


function removeDuplicates(adjacent) {
    return [...new Set(adjacent)];
}


function getRandomEvenArbitrary(min, max) {
    let randomNum =  Math.floor(Math.random() * (max - min) + min);
    if (randomNum % 2 !== 0)
        randomNum++;
    return randomNum;
  }