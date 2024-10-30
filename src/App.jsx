import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyBoard from './Components/KeyBoard';

function App() {
  const [display, setDisplay] = useState("");
  const addDisplay = (add) => {
   setDisplay(display+add);
  }

  return (
    <>
      <h1>amazing key board!</h1>
      <p >{display}</p>
      <KeyBoard addDisplay={addDisplay}/>
    </>
  );
}

export default App;
