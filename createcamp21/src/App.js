import './App.css';
import BankStatement from './BankStatement.js';
import ModelProjections from './ModelProjections';
import InputFile from './InputFile.js';
import { useState } from 'react';
import Habits from './Habits.js';
import Header from './Navbar.js';
import Footer from './Footer.js';

function App() {
  const [ lineInput, setLineInput] = useState();
  const lineFileInput = (data) =>{
    console.log(data);
    setLineInput(data);
  }

  const [projectionInput, setProjectionInput] = useState();
  const projectionInputLoad = (data) => {
    console.log(data);
    setProjectionInput(data);
  } 

  return (
    <div className="App"> 
      <Header/>  
      <InputFile output={lineFileInput} output2={projectionInputLoad}/>
      <ModelProjections lineInput = {lineInput} projectionInput = {projectionInput}/>
      <Habits things={projectionInput}/>
      <BankStatement/>
      <Footer/>
    </div>
  );
}

export default App;