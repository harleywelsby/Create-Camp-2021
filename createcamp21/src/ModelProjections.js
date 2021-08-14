import {useState} from 'react'

//States:
//Awaiting button (WAIT)
//Displaying default graphs (DEF)

function ModelProjections() {
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
            <button id="begin-button" onClick={flipState}>Hide how poor I am!</button>
        </div>);
    }
}

export default ModelProjections;