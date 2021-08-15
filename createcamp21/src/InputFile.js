import './InputFile.css';
import { CSVReader, readString } from 'react-papaparse';
import React, { Component } from 'react';

function InputFile(props) {

  const buttonRef = React.createRef();

  let count = 0;
  let transactions = [];
  let graphNodes = [];
  let monthSorted = [];

  const sortByMonth = (payments) => {
    payments.sort(function(a, b) {
      return (a-b); //NOTE: Doesn't work 
    });
  }

  const handleOnDrop = (data) => {
    let categories = ["Bills","Other","Impulse","Regular"]
    let category = (cost) =>{
      if(cost<10){
        return "Impulse";
      }else if(cost < 50){
        return "Regular"
      }else if(cost<200){
        return "Bills"
      }else{
        return "Other";
      }
    }
    //Get relevent columns
    for(let i=1; i<data.length; i++){
      var transaction = {
        amount: data[i].data[17],
        balance: data[i].data[10],
        customerId: data[i].data[20],
        merchantId: data[i].data[7],
        date: data[i].data[11],
        desc: data[i].data[6],
        firstName: data[i].data[9],
        extraction: data[i].data[16],
        accountnumber: data[i].data[3]
      }
      transactions.push(transaction)
    }
    
    //Sort data into lists per graph
    for(let i=0; i<transactions.length; i++){
      var transaction = transactions[i];
      var transCategory = category(transactions[i].amount);
      StatementRow(transaction.date, transaction.accountnumber,transaction.amount, transCategory);
      //Handle data for the line graph
      var graphNode = {
        name: transactions[i].date,
        balance: transactions[i].balance,
        category: transCategory
      }
      graphNodes.push(graphNode);
    }
    props.output(graphNodes);

    //monthSorted = sortByMonth(transactions);
    //console.log(monthSorted);
  };

  function StatementRow(date,account,amount,category) {
    count++;
    var table_body = document.getElementById("table-body");
    var tablerow = document.createElement("tr");
    var tabledate = document.createElement("td");
    tabledate.innerHTML = date;
    var tableaccount = document.createElement("td");
    tableaccount.innerHTML = account;
    var tableamount = document.createElement("td");
    tableamount.innerHTML = amount;
    var tablecategory = document.createElement("td");

    var bill = document.createElement("button");
    bill.id = count+"B";
    bill.className="brio";
    category=="Bills"?bill.style.cssText="border-width:2px;width:25px;":bill.style.cssText="width:25px"
    bill.onclick=function(){  
      bill.style.cssText="border-width:2px;width:25px;"
      document.getElementById(this.id.slice(0,-1)+"I").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"R").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"O").style.cssText="width:25px"
  };
    bill.innerHTML="B"

    var regular = document.createElement("button");
    regular.id = count+"R";
    regular.className="brio";
    category=="Regular"?regular.style.cssText="border-width:2px;width:25px;":regular.style.cssText="width:25px"
    regular.onclick=function(){  
      regular.style.cssText="border-width:2px;width:25px;"
      document.getElementById(this.id.slice(0,-1)+"I").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"B").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"O").style.cssText="width:25px"
  };
    regular.innerHTML="R"

    var impulse = document.createElement("button");
    impulse.id = count+"I";
    impulse.className="brio";
    category=="Impulse"?impulse.style.cssText="border-width:2px;width:25px;":impulse.style.cssText="width:25px"
    impulse.onclick=function(){  
      impulse.style.cssText="border-width:2px;width:25px;"
      document.getElementById(this.id.slice(0,-1)+"B").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"R").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"O").style.cssText="width:25px"
  };
    impulse.innerHTML="I";
    
    var other = document.createElement("button");
    other.className="brio";
    other.id = count+"O";
    category=="Other"?other.style.cssText="border-width:2px;width:25px;":other.style.cssText="width:25px"
    other.onclick=function(){  
      other.style.cssText="border-width:2px;width:25px;"
      document.getElementById(this.id.slice(0,-1)+"B").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"R").style.cssText="width:25px"
      document.getElementById(this.id.slice(0,-1)+"I").style.cssText="width:25px"
  };
    other.innerHTML="O"
    
    tablecategory.append(bill);
    tablecategory.append(regular);
    tablecategory.append(impulse);
    tablecategory.append(other);
    tablerow.append(tabledate);
    tablerow.append(tableaccount);
    tablerow.append(tableamount);
    tablerow.append(tablecategory);
    table_body.append(tablerow);
    
}

  return (
    <div className="fileSystem">

      <CSVReader style={{}} config={{}} addRemoveButton onDrop={handleOnDrop} >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>

    </div>
  );
}

export default InputFile;