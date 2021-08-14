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
        extraction: data[i].data[16]
      }
      transactions.push(transaction);
    }

    for(let i=0; i<transactions.length; i++){
      var graphNode = {
        name: transactions[i].date,
        spendings: transactions[i].balance
      }
      graphNodes.push(graphNode);
    }

  };

  return (
    <div className="fileSystem">

    <CSVReader style={{}} config={{}} addRemoveButton onDrop={handleOnDrop} >
      <span>Drop CSV file here or click to upload.</span>
    </CSVReader>

    </div>
  );
}

export default InputFile;