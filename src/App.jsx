import { useState } from 'react';
import './App.css';
import KeyBoard from './Components/KeyBoard';
import ChangeColor from './Components/ChangeColor';
import ChangeSize from './Components/ChangeSize';
import ChangeAll from './Components/ChangeAll';

const initialStyle = {color: "black" ,fontSize: "16px"};
const initialDisplay = [{style: initialStyle, char: ""}];

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));


function App() {
  const [display, setDisplay] = useState(initialDisplay);
  const [currStyle, setCurrStyle] = useState(initialStyle);


  const addChar = (char) => {
    setDisplay((prevDisplay) =>  [...prevDisplay, {style: currStyle, char: char}]);
  }   

  const newStyle = (key, value) => {
    console.log("in newStyle");
    let newStyle = deepCopy(currStyle); 
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

  const clearAll = () => setDisplay([deepCopy(initialDisplay)]); 

  const deleteChar = () => setDisplay((prevDisplay) => {
    return [...prevDisplay].slice(0,-1);
  });

  const changeAll = (attribute, value) => {
    console.log("change: " + attribute + " to " + value);
    if(attribute === 'case'){
      const changeTo = (str) => (value === 'upper' ? str.toUpperCase() : str.toLowerCase());
      setDisplay((prevDisplay) => {
        return prevDisplay.map((item) => {
          let newItem = deepCopy(item);
          newItem.char = changeTo(newItem.char);
          return newItem;});
      });
    }

    setDisplay((prevDisplay) => {
      return prevDisplay.map((item) => {
        let newItem = deepCopy(item);
        newItem.style[attribute] = value;
        return newItem;});
    });
    newStyle(attribute, value);
  };

  return (
    <>
    <div id="all"> 
      <h1 id="title">amazing keyboard!</h1>
      <pre style={{height: "50px"}}>{
        display.map((span) => (<span style={span.style}>{span.char}</span>))
      }</pre>
      <KeyBoard addDisplay={addChar} clear={clearAll} delete={deleteChar}/>
      <ChangeColor changeColor={changeColor}/>
      <ChangeSize  changeSize={changeSize}/>
      <ChangeAll changeAll={changeAll} />
      </div>
    </>
  );
}

export default App;
