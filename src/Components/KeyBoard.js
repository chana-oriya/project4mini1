import React, {useState} from "react";
import Key from './Key'

const keys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', ' '];

function KeyBoard(props){
    const keyClicked = (char) => {
        props.addDisplay(char);
    }

    return (
        <div>
            {keys.map((key) => (<Key keyClicked={keyClicked} char={key}/>))}
        </div>
    )
}

export default KeyBoard;