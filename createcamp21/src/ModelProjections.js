import {useState} from 'react'
import MoneyLine from "./LineChart.js"
import "./ModelProjections.css"
import Projection from "./Projection.js"

const data = [{name: 'January', balance: 400},{name: 'February', balance: 300}];

//States:
//Awaiting button (WAIT)
//Checking categories (TWEAK)
//Displaying graphs (DISPLAY)

function ModelProjections(props) {
    const [value, setValue] = useState("WAIT");
    const flipState = () => {
        if(value === "WAIT") {
            setValue("TWEAK");
        } else if(value === "TWEAK"){
            setValue("WAIT");
        } 
    };

    if(value === "WAIT") {
        return (<div className="card-div">
            <button id="begin-button" onClick={flipState}>Show my insights!</button>
        </div>);
    } else if(value === "TWEAK"){
        return (<div className="card-div">
            
            <div className="lines">
            <MoneyLine data={props.lineInput}/>
            <div className="projection">
            <Projection data={props.projectionInput}/>
            </div>
            </div>
            <button id="begin-button" onClick={flipState}>Hide how poor I am!</button>
        </div>);
    }
}

export default ModelProjections;