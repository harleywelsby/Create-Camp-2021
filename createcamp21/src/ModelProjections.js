import {useState} from 'react'
import MoneyLine from "./LineChart.js"
import MoneyPie from "./PieChart.js"

const data = [{name: 'January', spendings: 400},{name: 'February', spendings: 300}, {name:'February',spendings:500}];
const data2 = [{name: 'Bills', spendings: 400},{name: 'Regular', spendings: 300}, {name:'Impulse',spendings:500}];

//States:
//Awaiting button (WAIT)
//Displaying default graphs (DEF)

function ModelProjections(props) {
    const [value, setValue] = useState("WAIT");
    const flipState = () => {
        if(value === "WAIT") {
            setValue("DEF");
        } else {
            setValue("WAIT");
        }
    };

    if(value === "WAIT") {
        return (<div className="card-div">
            <button id="begin-button" onClick={flipState}>Show me how poor I am!</button>
        </div>);
    } else {
        return (<div className="card-div">
            <MoneyLine data={props.lineInput}/>
            <MoneyPie data={data2}/>
            <button id="begin-button" onClick={flipState}>Hide how poor I am!</button>
        </div>);
    }
}

export default ModelProjections;