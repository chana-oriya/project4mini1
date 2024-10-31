import React, {useState} from "react";

function ChangeSize(props){
    
    return (
        <div>
            <button onClick={() => props.changeSize('16px')}>16</button>
            <button onClick={() => props.changeSize('20px')}>20</button>
            <button onClick={() => props.changeSize('24px')}>24</button>
        </div>
    )
}

export default ChangeSize;