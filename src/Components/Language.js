import React, {useState} from "react";

function Language(props){
    
    return (
        <> 
        <button onClick={() => props.ChangeLanguage(props.lekeys)}>english</button>
        <button onClick={() => props.ChangeLanguage(props.hekeys)}> עברית</button>
        <button onClick={() => props.ChangeLanguage(props.uekeys)}>uperCase</button>
        <button onClick={() => props.ChangeLanguage(props.sign)}>signs</button>
        </>
    )
}

export default Language;