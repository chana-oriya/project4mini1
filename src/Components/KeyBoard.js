import React, {useState} from "react";
import Key from './Key'
import Language from './Language';

const lekeys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m', ' '];
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
            {language.map((key) => (<Key keyClicked={keyClicked} char={key}/>))}
        </div>
        <Language lekeys={lekeys} uekeys={uekeys} hekeys={hekeys} ChangeLanguage={ChangeLanguage}/>
        </>
    )
}

export default KeyBoard;