import './InputFile.css';
import { CSVReader, readString } from 'react-papaparse';
import React, { Component } from 'react';
import ProjectData from './Model.js';

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
    props.output2(ProjectData(transactions));
    for(let i=0; i<transactions.length; i++){
      var transaction = transactions[i];
      StatementRow(transaction.date, transaction.accountnumber,transaction.amount, null);
      //Handle data for the line graph
      var graphNode = {
        name: transactions[i].date,
        balance: transactions[i].balance
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
    tablecategory.innerHTML = category;

    var bill = document.createElement("button");
    bill.id = count;
    bill.className="brio";
    bill.onclick=function(){  alert(this.id);};
    bill.innerHTML="B"

    var regular = document.createElement("button");
    regular.id = count;
    regular.className="brio";
    regular.onclick=function(){  alert(this.id);};
    regular.innerHTML="R"

    var impulse = document.createElement("button");
    impulse.id = count;
    impulse.className="brio";
    impulse.onclick=function(){  alert(this.id);};
    impulse.innerHTML="I";
    
    var other = document.createElement("button");
    other.className="brio";
    other.id = count;
    other.onclick=function(){  alert(this.id);};
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