import React, {useState} from "react";
import Key from './Key'
import Language from './Language';

const lekeys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const uekeys = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
const hekeys = ['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת','ץ','ף','ם','ך'];
const sign = ['`','~','!','@','#','$','%','^','&','*','(',')','_','-','+','=','/','?','<','>','|',',','.']


function KeyBoard(props){

    const [language, setLanguage]= useState(lekeys);
    
    const keyClicked = (char) => {
        props.addDisplay(char);
    }

    const ChangeLanguage = (lang) => {
        setLanguage(lang);
    }

    const delate =()=> {
        console.log(props.display);
        const ex="akuo"
        // props.addDisplay(str.slice(0,-1))
    }

    const clear =()=> {
        props.setDisplay(" ")
        // props.addDisplay()
    }


    return (
        <div>
        <div>
            {language.map((key) => (<Key keyClicked={keyClicked} char={key}/>))}
        </div>

        <div>
        <button onClick={()=>keyClicked(' ')} >space</button>
        <button onClick={()=>delate()} >delate</button>
        <button onClick={()=>clear()} >clear all</button>
        </div>

        <div>
        <br></br>
        <Language lekeys={lekeys} uekeys={uekeys} hekeys={hekeys} sign={sign} ChangeLanguage={ChangeLanguage}/>
        </div>
        
        </div>
    )
}

export default KeyBoard;