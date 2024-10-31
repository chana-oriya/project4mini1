import React, {useState} from "react";
// import '.../App.css';

function ChangeSize(props){
    
    return (
        <div>
            <button class="cs" style={{...style ,fontSize:"16px"}} onClick={() => props.changeSize('16px')}>16</button>
            <button class="cs" style={{...style ,fontSize:"20px"}} onClick={() => props.changeSize('20px')}>20</button>
            <button class="cs" style={{...style ,fontSize:"24px"}} onClick={() => props.changeSize('24px')}>24</button>
        </div>
    )
}

const style={
    width:"63px",
    height:"43px",
    // width: "fit-content",
    // blockSize: "fit-content",
    fontWeight:"bold",
    fontSize:"16px",
    margin:"3px"
}

export default ChangeSize;