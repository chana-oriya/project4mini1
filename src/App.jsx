import { useState } from 'react';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import ChangeColor from './Components/ChangeColor';

function App() {
  const [display, setDisplay] = useState([{style: {color: "pink"}, char: "-"}]);
  //const [color, setColor] = useState("black");
  const [currStyle, setCurrStyle] = useState({color: "red"});

  const addChar = (char) => {
    
    setDisplay((prevDisplay) => {
        prevDisplay.push({style: currStyle, char: char});
        return [...prevDisplay];
      }
    );
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

  return (
    <>
      <h1>amazing key board!</h1>
      <p style={{height: "50px"}}>{
        display.map((span) => (<span style={span.style}>{span.char}</span>))
      }</p>
      <KeyBoard addDisplay={addChar}/>
      <ChangeColor changeColor={changeColor}/>
    </>
  );
}

export default App;
