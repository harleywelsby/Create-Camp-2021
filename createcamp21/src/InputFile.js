import './InputFile.css';
import { CSVReader, readString } from 'react-papaparse';
import React, { Component } from 'react';

function InputFile() {

  const buttonRef = React.createRef();

  let transactions = [];
  let graphNodes = [];

  const handleOnDrop = (data) => {

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
      transactions.push(transaction);
    }
    for(let i=0; i<transactions.length; i++){
      var transaction = transactions[i];
      StatementRow(transaction.date, transaction.accountnumber,transaction.amount, null);
      var graphNode = {
        name: transactions[i].date,
        spendings: transactions[i].balance
      }
      graphNodes.push(graphNode);
    }

  };

  function StatementRow(date,account,amount,category) {
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