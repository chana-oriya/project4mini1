import React, {useState} from "react";

function Key(props){
    
    return (
        <button style={{ width:"50px" , height:"50px", fontWeight:"bold" ,fontSize:"16px" }} onClick={() => props.keyClicked(props.char)}>{props.char == " " ? "_" : props.char}</button>
    )
}

export default Key;