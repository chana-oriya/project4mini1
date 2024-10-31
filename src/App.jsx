import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import ChangeColor from './Components/ChangeColor';

function App() {
  const [display, setDisplay] = useState("");
  const [color, setColor] = useState("black");
  
  const addDisplay = (add) => {
    //array of span
   setDisplay((<span style={{color: color}}>{add}</span>));
  }
  const changeColor = (color) => {
    setColor(color);
  }

  return (
    <>
      <h1>amazing key board!</h1>
      <p style={{height: "50px"}}>{display}</p>
      <KeyBoard addDisplay={addDisplay}/>
      <ChangeColor changeColor={changeColor}/>
    </>
  );
}

export default App;
