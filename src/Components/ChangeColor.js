import React, {useState} from "react";

function ChangeColor(props){
    
    return (
        <div>
            <button onClick={() => props.changeColor('red')}>red</button>
            <button onClick={() => props.changeColor('black')}>black</button>
            <button onClick={() => props.changeColor('blue')}>blue</button>
        </div>
    )
}

export default ChangeColor;