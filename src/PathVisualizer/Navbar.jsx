import React from "react";
import {BsCaretDownFill} from 'react-icons/bs'

export default class NavBar extends React.Component {
    render () {
        let { dropMenuBtn, changeCurrentAlgo, changeCurrentSpeed, 
            clearBoard, clearPath, visualizeAlgo, visualizeMaze } = this.props;
        return (
            <div className="nav-bar">
            <button className="not-hidden-refresh" onClick={() => window.location.reload(false)}>Path Visualizer</button>
            <div className="dropdown-menu">
                <button className="menu-btn" onClick={() => dropMenuBtn('menu-content')}>Algorithms <BsCaretDownFill/></button>
                <div className="menu-content">
                    <button className="hidden" onClick={() => changeCurrentAlgo('Dijkstra')}>Dijkstra</button>
                    <button className="hidden" onClick={() => changeCurrentAlgo('DFS')}>DFS</button>
                    <button className="hidden" onClick={() => changeCurrentAlgo('BFS')}>BFS</button>
                    <button className="hidden" onClick={() => changeCurrentAlgo('A *')}>A *</button>
                </div>
            </div>
                <button className="not-hidden" onClick={() => clearPath()}>Clear Paths</button>
                <button className="not-hidden" onClick={() => clearBoard()}>Clear Board</button>
                <div className="dropdown-menu">
                <button className="menu-btn" onClick={() => dropMenuBtn('maze-menu-content')}>Generate Maze <BsCaretDownFill/></button>
                <div className="maze-menu-content">
                    <button className="hidden" onClick={() => visualizeMaze()}>Random Maze</button>
                </div>
            </div>
            <div className="dropdown-menu">
                <button className="menu-btn"  onClick={() => dropMenuBtn('speed-menu-content')}>Speed <BsCaretDownFill/></button>
                <div className="speed-menu-content">
                    <button className="hidden" onClick={() => changeCurrentSpeed('Fastest')}>Fastest</button>
                    <button className="hidden" onClick={() => changeCurrentSpeed('Fast')}>Fast</button>
                    <button className="hidden" onClick={() => changeCurrentSpeed('Normal')}>Normal</button>
                    <button className="hidden" onClick={() => changeCurrentSpeed('Slow')}>Slow</button>
                    <button className="hidden" onClick={() => changeCurrentSpeed('Slowest')}>Slowest</button>
                </div>
            </div>
            <button className="play" onClick={() => visualizeAlgo()}>Visualize</button>   
        </div>
        )
    }
}