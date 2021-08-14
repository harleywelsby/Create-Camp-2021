import {useState} from 'react'
import MoneyLine from "./LineChart.js"

const data = [{name: 'January', spendings: 400},{name: 'February', spendings: 300}, {name:'February',spendings:500}];

//States:
//Awaiting button (WAIT)
//Checking categories (TWEAK)
//Displaying graphs (DISPLAY)

function ModelProjections() {
    const [value, setValue] = useState("WAIT");
    const flipState = () => {
        if(value === "WAIT") {
            setValue("TWEAK");
        } else if(value === "TWEAK"){
            setValue("WAIT");
        } else {

        }
    };

    if(value === "WAIT") {
        return (<div className="card-div">
            <button id="begin-button" onClick={flipState}>Show my insights!</button>
        </div>);
    } else if(value === "TWEAK"){
        return (<div className="card-div">
            <MoneyLine data={data}/>
            <button id="begin-button" onClick={flipState}>Hide how poor I am!</button>
        </div>);
    } else {
        return (<div className="card-div">
            <MoneyLine data={data}/>
            <button id="begin-button" onClick={flipState}>Hide how poor I am!</button>
        </div>);
    }
}

export default ModelProjections;