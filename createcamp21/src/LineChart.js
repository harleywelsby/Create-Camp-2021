import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';

function Chart(props) {
  const [time, setTime] = useState(props.data.length);
  const month = () => {
    setTime(props.data.length/3);
  }
  const quarter = () => {
    setTime(props.data.length);
  }
  return (
    <div className="line-chart">
      <div className="line-buttons">
      <button id="Month" onClick={month} className="line-button">Month</button>
      <button id="Quarter" onClick={quarter} className="line-button">Quarter</button>
      </div>
      <MoneyLine data={props.data} end={time} />
    </div>
  )
}


function MoneyLine(props) {
  const currentData = (num) => {
    console.log(props.data)
    return props.data.slice(0, num)
  }


  const maxData = () =>{
    let values=  props.data.map((point)=>{
      return parseInt(point.balance);
    })
    return Math.round(Math.max.apply(null, values)/1000)*1000;
  }
  
  return <LineChart width={400} height={400} data={currentData(props.end)} className="chart">
    <Line type="monotone" dataKey="balance" stroke="#33bbff" />
    <Line type="monotone" dataKey="newbalance" stroke="#FF0000" />

    <Tooltip />
    <XAxis dataKey="name" stroke="#004165"/>
    <YAxis domain={[0,maxData()]} stroke="#004165"/>
  </LineChart>;
}

export default Chart;