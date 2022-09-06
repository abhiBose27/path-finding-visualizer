export function animateMaze(animations, speed){
    for (let i = 0; i < animations.length; i++){
        setTimeout(() => {
            const [row, col] = animations[i];
            document.getElementById(`node-${row}-${col}`).className = 'node node-animated-wall';
        },i * speed)
    }
}