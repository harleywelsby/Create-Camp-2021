import { PieChart, Pie} from 'recharts';



function MoneyPie(props) {
  let renderLabel = function(entry) {
    return entry.name;
}
    return <PieChart width={730} height={250}>
    <Pie data={props.data} dataKey="spendings" nameKey="name" cx="50%" cy="50%"outerRadius={80} fill={"#82ca9d" }label />
  </PieChart>
}

export default MoneyPie;