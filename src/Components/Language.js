import React, {useState} from "react";

function Language(props){
    
    return (
        <> 
        <button style={style} onClick={() => props.ChangeLanguage(props.lekeys)}>english</button>
        <button style={style} onClick={() => props.ChangeLanguage(props.hekeys)}> עברית</button>
        <button style={style} onClick={() => props.ChangeLanguage(props.uekeys)}>uperCase</button>
        <button style={style} onClick={() => props.ChangeLanguage(props.sign)}>signs</button>
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
