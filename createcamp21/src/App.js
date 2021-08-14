import './App.css';
import BankStatement from './BankStatement.js';
import ModelProjections from './ModelProjections';
import InputFile from './InputFile.js';
import { useState } from 'react';
import Habits from './Habits.js';

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
      <Habits/>
    </div>
  );
}

export default App;
