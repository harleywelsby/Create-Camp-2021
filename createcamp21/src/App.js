import './App.css';
import MoneyLine from "./LineChart.js"

const data = [{name: 'January', spendings: 400},{name: 'February', spendings: 300}, {name:'February',spendings:500}];
import BankStatement from './Statement.js';
import ModelProjections from './ModelProjections';

function App() {
  return (
    <div className="App">
      <MoneyLine data={data}/>
      <BankStatement/>
      <ModelProjections/>
    </div>
  );
}

export default App;
