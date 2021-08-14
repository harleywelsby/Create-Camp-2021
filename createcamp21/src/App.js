import './App.css';
import MoneyLine from "./LineChart.js"

const data = [{name: 'January', spendings: 400},{name: 'February', spendings: 300}, {name:'February',spendings:500}];

function App() {
  return (
    <div className="App">
      <MoneyLine data={data}/>
    </div>
  );
}

export default App;
