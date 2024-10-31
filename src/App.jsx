import { useState } from 'react';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import ChangeColor from './Components/ChangeColor';
import ChangeSize from './Components/ChangeSize';

function App() {
<<<<<<< HEAD
  const [display, setDisplay] = useState(" ");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("16px");
  
  const addDisplay = (add) => {
    //array of span
   setDisplay((<span style={{color: color , fontSize:size }}>{add}</span>));
=======
  const [display, setDisplay] = useState([{style: {color: "pink"}, char: "-"}]);
  //const [color, setColor] = useState("black");
  const [currStyle, setCurrStyle] = useState({color: "red"});

  const addChar = (char) => {
    
    setDisplay((prevDisplay) => {
        prevDisplay.push({style: currStyle, char: char});
        return [...prevDisplay];
      }
    );
>>>>>>> c0ff52fc81317ddb3a3a358b6d3f47a20019aee5
  }

  const newStyle = (key, value) => {
    console.log("in newStyle");
    let newStyle = JSON.parse(JSON.stringify(currStyle)); //change to more correct way
    newStyle[key] = value;
    console.log(newStyle);
    setCurrStyle(newStyle);
  }

  const changeColor = (color) => {
    newStyle("color", color);
  }

  const changeSize = (size) => {
    setSize(size);
  }


  return (
    <>
      <h1>amazing key board!</h1>
<<<<<<< HEAD
      <p style={{height: "50px"}}>{display}</p>
      <KeyBoard addDisplay={addDisplay} display={display} setDisplay={setDisplay}/>
=======
      <p style={{height: "50px"}}>{
        display.map((span) => (<span style={span.style}>{span.char}</span>))
      }</p>
      <KeyBoard addDisplay={addChar}/>
>>>>>>> c0ff52fc81317ddb3a3a358b6d3f47a20019aee5
      <ChangeColor changeColor={changeColor}/>
      <ChangeSize  changeSize={changeSize}/>
    </>
  );
}

export default App;
