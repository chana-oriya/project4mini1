import React, {useState} from "react";

function ChangeColor(props){
    
    return (
        <div>
            <button style={{...style , color:"red"}} onClick={() => props.changeColor('red')}>red</button>
            <button style={{...style , color:"black"}} onClick={() => props.changeColor('black')}>black</button>
            <button style={{...style , color:"blue"}} onClick={() => props.changeColor('blue')}>blue</button>
        </div>
    )
}

const style={
    width:"60px",
    height:"40px",
    width: "fit-content",
    // blockSize: "fit-content",
    fontWeight:"bold",
    fontSize:"16px",
    margin:"3px"
}

export default ChangeColor;