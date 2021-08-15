import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

function Projection(props) {

  return (
    <div>

      <MoneyLine data={props.data} />
    </div>
  )
}


function MoneyLine(props) {


  const maxData = () =>{
    let values=  props.data.map((point)=>{
      return parseInt(point.balance);
    })
    return Math.round(Math.max.apply(null, values)/1000)*1000;
  }
  
  return <LineChart width={400} height={400} data={props.data} className="chart">
    <Line type="monotone" dataKey="balance" stroke="red" />
    <Tooltip />
    <Line type="monotone" dataKey="balance" stroke="#33bbff" />
    <Tooltip />
    <XAxis dataKey="name" stroke="#004165"/>
    <YAxis domain={[0,maxData()]} stroke="#004165"/>
  </LineChart>;
}

export default Projection;