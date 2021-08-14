import { PieChart, Pie, Tooltip , Cell } from 'recharts';



function MoneyPie(props) {

    return <PieChart width={730} height={250}>
    <Pie data={props.data} dataKey="spendings" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill={"#82ca9d" }label />
  </PieChart>
}

export default MoneyPie;