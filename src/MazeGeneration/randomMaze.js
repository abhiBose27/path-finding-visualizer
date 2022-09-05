import { COLS, ROWS } from "../helper/constants";

export function randomMaze(grid) {
    let wallsAnimation = [];
    for (let row = 0; row < ROWS; row++){
        for (let col = 0; col < COLS; col++){
            const node = grid[row][col];
            if (node.isStart || node.isFinish) 
                continue;
            if (Math.random() < 0.33 && !grid[row][col].isWall){
                wallsAnimation.push([row, col])
            }
        }
    }
    return wallsAnimation;
}