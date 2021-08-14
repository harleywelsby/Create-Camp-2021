import './App.css';
import BankStatement from './Statement.js';
import ModelProjections from './ModelProjections';
import InputFile from './InputFile.js';
import { useState } from 'react';

function App() {
  const [ lineInput, setLineInput] = useState();
  const lineFileInput = (data) =>{
    console.log(data);
    setLineInput(data);
  }
  return (
    <div className="App">
      <BankStatement/>
      <ModelProjections lineInput = {lineInput}/>
      <InputFile output={lineFileInput}/>
    </div>
  );
}

export default App;
