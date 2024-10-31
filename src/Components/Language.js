import React, {useState} from "react";
// import '.../App.css';


function Language(props){
    
    return (
        <> 
        <button class="cl" style={style} onClick={() => props.ChangeLanguage(props.lekeys)}>english</button>
        <button class="cl" style={style} onClick={() => props.ChangeLanguage(props.hekeys)}> עברית</button>
        <button class="cl" style={style} onClick={() => props.ChangeLanguage(props.uekeys)}>Upper Case</button>
        <button class="cl" style={style} onClick={() => props.ChangeLanguage(props.sign)}>special</button>
        </>
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

export default Language;
