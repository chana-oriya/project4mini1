import { useState } from 'react';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import ChangeColor from './Components/ChangeColor';
import ChangeSize from './Components/ChangeSize';

const initialStyle = {color: "black" ,fontSize: "16px"};
const initialDisplay = [{style: initialStyle, char: "-"}];

function App() {
  const [display, setDisplay] = useState(initialDisplay);
  const [currStyle, setCurrStyle] = useState(initialStyle);


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

  const changeSize = (size) => {
    newStyle("fontSize", size);
  }

  const clearAll = () => setDisplay([{color: "black" ,fontSize: "16px"}]); //create copy of initialDisplay

  const deleteChar = () => setDisplay((prevDisplay) => {
    return [...prevDisplay].slice(0,-1);
  });

  return (
    <>
    <div id="all"> 
      <h1 id="title">amazing key board!</h1>
      <p style={{height: "50px"}}>{
        display.map((span) => (<span style={span.style}>{span.char}</span>))
      }</p>
      <KeyBoard addDisplay={addChar} clear={clearAll} delete={deleteChar}/>
      <ChangeColor changeColor={changeColor}/>
      <ChangeSize  changeSize={changeSize}/>
      </div>
    </>
  );
}

export default App;
