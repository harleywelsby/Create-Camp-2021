import './Habits.css';
import ModelProjections from './ModelProjections';
import { useState } from 'react';
import MoneyPie from "./PieChart.js"
import avoPic from "./Avocado.svg"

function Habits() {

    function getRandomInt(max) {
        return Math.floor(20 + Math.random() * max);
      }
    const avg = [{name: 'Bills', spendings: 100},{name: 'Regular', spendings: 129}, {name:'Impulse',spendings:61}, {name:'Other',spendings:33}];
    const data2 = [{name: 'Bills', spendings: getRandomInt(160)},{name: 'Regular', spendings: getRandomInt(180)}, {name:'Impulse',spendings:getRandomInt(15)}, {name:'Other',spendings:getRandomInt(20)}];
    return (
        <div className="habits" id="habits">
            <h1 className="HabitHeader">Weekly Habits:</h1>
            <img className = "avo" src={avoPic}/>
            
            <div className = "pieDiv">
                <MoneyPie className="pieChart" data={data2} data2={avg}/>
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
