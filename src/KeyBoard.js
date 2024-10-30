import React, {useState} from "react";
import Key from './Key'

const keys = ['q','w','e'];

function KeyBoard(props){
    const keyClicked = (char) => {
        props.addDisplay(char);
    }

    return (
        <div>
            <Key keyClicked={keyClicked} char={keys[0]} />
            <Key keyClicked={keyClicked} char={keys[1]}/>
            <Key keyClicked={keyClicked} char={keys[2]}/>
        </div>
    )
}

export default KeyBoard;