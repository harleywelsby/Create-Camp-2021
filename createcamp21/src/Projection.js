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
    <XAxis dataKey="name" />
    <YAxis domain={[0,maxData()]}/>
  </LineChart>;
}

export default Projection;