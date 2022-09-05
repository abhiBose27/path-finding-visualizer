export function animateMaze(animations, speed){
    for (let i = 0; i < animations.length; i++){
        /*if (i === animations.length){
            setTimeout(() => {
                const newGrid = getGridWithMaze(this.state.grid, animations);
                this.setState({ grid: newGrid, isRunning: false });
                this.changeColorVisualizeBtn(false);
            }, 10 * i);
            return ;
        }*/
        setTimeout(() => {
            const [row, col] = animations[i];
            document.getElementById(`node-${row}-${col}`).className = 'node node-animated-wall';
        },i * speed)
    }
}