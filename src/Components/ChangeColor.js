import React, {useState} from "react";

function ChangeColor(props){
   
    function setColor(color){
        console.log(color);
    }

    return (
        <div>
            <button onClick={() => setColor('red')}>red</button>
            <button onClick={() => setColor('black')}>black</button>
            <button onClick={() => setColor('blue')}>blue</button>
        </div>
    )
}

export default ChangeColor;