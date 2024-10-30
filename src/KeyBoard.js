import React, {useState} from "react";
import Key from './Key'

const keys = ['q','w','e'];

function KeyBoard(props){
    return (
        <div>
            <Key char={keys[0]} />
            <Key char={keys[1]}/>
            <Key char={keys[2]}/>
        </div>
    )
}

export default KeyBoard;