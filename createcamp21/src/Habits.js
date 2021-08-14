import './Habits.css';
import ModelProjections from './ModelProjections';
import { useState } from 'react';
import MoneyPie from "./PieChart.js"
import avoPic from "./Avocado.svg"

function Habits() {
    const data2 = [{name: 'Bills', spendings: 250},{name: 'Regular', spendings: 80}, {name:'Impulse',spendings:128}, {name:'Other',spendings:39}];
    return (
        <div className="habits">
            <h1 className="HabitHeader">Habits:</h1>
            <img className = "avo" src={avoPic}/>
            
            <div className = "pieDiv">
                <MoneyPie className="pieChart" data={data2}/>
            </div>
            <div className = "HabitP">
                <p>Money Spent:</p>
                <p>Bills: ${data2[0].spendings}</p>
                <p>Regular: ${data2[1].spendings}</p>
                <p>Impulse: ${data2[2].spendings}</p>
                <p>Other: ${data2[3].spendings}</p>
            </div>
        </div>
    );
}

export default Habits;
