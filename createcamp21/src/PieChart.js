import { PieChart, Pie} from 'recharts';



function MoneyPie(props) {
  let renderLabel = function(entry) {
    return entry.name;
}
    return <PieChart width={730} height={250}>
    <Pie data={props.data} dataKey="spendings" nameKey="balance" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill={"#0079b4" }label={renderLabel} />
  </PieChart>
}

export default MoneyPie;