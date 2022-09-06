import { ROWS, COLS } from '../helper/constants'


let walls;
export function recursiveDivisionMaze(grid, startnode, endnode) {
    let vertical = Array(COLS).fill().map((_, i) => i);
    let horizontal = Array(ROWS).fill().map((_, i) => i);
    //console.log(vertical, horizontal);

    walls = [];

    getWalls(vertical, horizontal, grid, startnode, endnode);
    return walls;
}

function getWalls(vertical, horizontal, grid, startnode, endnode){
    if (vertical.length < 2 || horizontal.length < 2)
        return;
    let dir;
    let num;
    if (vertical.length > horizontal.length){
        dir = 0;
        num = getRandomOddNumber(vertical)
    }
    else {
        dir = 1;
        num = getRandomOddNumber(horizontal);
    }

    if (dir === 0) {
        addWallsToArray(dir, num, vertical, horizontal, startnode, endnode);
        getWalls(vertical.slice(0, vertical.indexOf(num)), horizontal, grid, startnode, endnode);
        getWalls(vertical.slice(vertical.indexOf(num) + 1), horizontal, grid, startnode, endnode);
    }
    else {
        addWallsToArray(dir, num, vertical, horizontal, startnode, endnode);
        getWalls(vertical, horizontal.slice(0, horizontal.indexOf(num)), grid, startnode, endnode);
        getWalls(vertical, horizontal.slice(horizontal.indexOf(num) + 1), grid, startnode, endnode);
    }
}

function getRandomOddNumber(array) {
    let max = array.length - 1;
    let randomNum = Math.floor(Math.random() * (max / 2));
    if (randomNum % 2 === 0){
        randomNum = randomNum === max ? randomNum - 1: randomNum + 1;
    }
    return array[randomNum];
}


function addWallsToArray(dir, num, vertical, horizontal, startnode, endnode) {
    let isStartorFinish = false;
    let tempWalls = [];
    if (dir === 0) {
        if (horizontal.length === 2) return;
        for (const cell of horizontal) {
            if ((cell === startnode.row && num === startnode.col) || (cell === endnode.row && num === endnode.col)){
                isStartorFinish = true;
                continue;
            }
            tempWalls.push([cell, num]);
        }
    }
    else {
        if (vertical.length === 2) return;
        for (const cell of vertical) {
            if ((num === startnode.row && cell === startnode.col) || (num === endnode.row && cell === endnode.col)){
                isStartorFinish = true;
                continue;
            }
            tempWalls.push([num, cell]);
        }
    }

    if (!isStartorFinish) {
        let randomNum = getRandomNumber(tempWalls.length);
        tempWalls = [...tempWalls.slice(0, randomNum), ...tempWalls.slice(randomNum + 1)];
    }
    for (const wall of tempWalls) {
        walls.push(wall);
    }
}

function getRandomNumber(max) {
    let randomNum = Math.floor(Math.random() * (max / 2));
    if (randomNum % 2 !== 0){
        randomNum = randomNum === max ? randomNum - 1 : randomNum + 1;
    }
    return randomNum;
}