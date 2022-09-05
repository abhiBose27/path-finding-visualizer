import React from "react";
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {GiTargeted} from 'react-icons/gi'
import './Node.css'

export default class Node extends React.Component {
    render () {
        const {
            col, row, isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp, onMouseLeave,
        } = this.props

        const className = 
        isFinish 
        ? 'node-finish'
        : isStart
        ? 'node-start'
        : isWall
        ? 'node-wall'
        : ''
        return (
            <div 
                id={`node-${row}-${col}`}
                className={`node ${className}`}
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp(row, col)}
                onMouseLeave={() => onMouseLeave(row, col)}
                > {
                    (className === 'node-start' && <FaArrowAltCircleRight style={{height: '100%', width: '100%'}} size="40px" color="#37468C"/>) ||
                    (className === 'node-finish' && <GiTargeted style={{height: '100%', width: '100%'}} size="40px" color="#37468C"/> )
                }
            </div>
        )
    }
}