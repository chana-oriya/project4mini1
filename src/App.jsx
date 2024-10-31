import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import ChangeColor from './Components/ChangeColor';
import ChangeSize from './Components/ChangeSize';

function App() {
  const [display, setDisplay] = useState(" ");
  const [color, setColor] = useState("black");
  const [size, setSize] = useState("16px");
  
  const addDisplay = (add) => {
    //array of span
   setDisplay((<span style={{color: color , fontSize:size }}>{add}</span>));
  }
  const changeColor = (color) => {
    setColor(color);
  }

  const changeSize = (size) => {
    setSize(size);
  }


  return (
    <>
      <h1>amazing key board!</h1>
      <p style={{height: "50px"}}>{display}</p>
      <KeyBoard addDisplay={addDisplay} display={display} setDisplay={setDisplay}/>
      <ChangeColor changeColor={changeColor}/>
      <ChangeSize  changeSize={changeSize}/>
    </>
  );
}

export default App;
