import { PieChart, Pie} from 'recharts';



function MoneyPie(props) {
  let renderLabel = function(entry) {
    return entry.name;
}
    return <PieChart width={730} height={250}>
    <Pie data={props.data} dataKey="spendings" nameKey="name" cx="50%" cy="50%"outerRadius={80} fill={"#33bbff" } />
    <Pie data={props.data2} dataKey="spendings" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={100} fill={"#004165" }label={renderLabel} />
  </PieChart>
}

export default MoneyPie;