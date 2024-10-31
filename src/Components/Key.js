import React, {useState} from "react";

function Key(props){
    
    return (
        <button onClick={() => props.keyClicked(props.char)}>{props.char == " " ? "_" : props.char}</button>
    )
}

export default Key;