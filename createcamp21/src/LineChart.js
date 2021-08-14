import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import {useState} from 'react';

function Chart(props){
  const [time, setTime] = useState(props.data.length);
  const month = () =>{
    setTime(1);
  }
  const quarter = () =>{
    setTime(2);
  }
  const year = () =>{
    setTime(3);
  }
  return (
  <div>
    <button id="Month" onClick={month}>Month</button>
    <button id="Quarter" onClick={quarter}>Quarter</button>
    <button id="Year" onClick={year}>Year</button>
    <MoneyLine data={props.data} end = {time}/ >
  </div>
  )
}


function MoneyLine(props){
  const currentData =  (num) => {
    return props.data.slice(0,num)
  }


    const renderLineChart = (
        <LineChart width={400} height={400} data={currentData(props.end)}>
          <Line type="monotone" dataKey="spendings" stroke="#8884d8" />
          <Tooltip />
          <XAxis dataKey="name" />
        <YAxis />
        </LineChart>
      );
    return renderLineChart;
}

export default Chart;