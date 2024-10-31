import React, {useState} from "react";
import Key from './Key'
import Language from './Language';

const lekeys = ['q','w','e'];
const uekeys = ['A','B','C'];
const hekeys = ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת'];



function KeyBoard(props){

    const [language, setLanguage]= useState(lekeys);
    
    const keyClicked = (char) => {
        props.addDisplay(char);
    }

    const ChangeLanguage = (lang) => {
        setLanguage(lang);
    }

    return (
        <>
        <div>
            <Key keyClicked={keyClicked} char={language[0]} />
            <Key keyClicked={keyClicked} char={language[1]}/>
            <Key keyClicked={keyClicked} char={language[2]}/>
        </div>
        <Language lekeys={lekeys} uekeys={uekeys} hekeys={hekeys} ChangeLanguage={ChangeLanguage}/>
        </>
    )
}

export default KeyBoard;