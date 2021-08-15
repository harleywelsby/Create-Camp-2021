function ProjectData(transactions) {
    var month1InitialBalance;
    var month2InitialBalance;
    var month3InitialBalance;
    var month3FinalBalance;

    var month1;
    var month2;
    var month3;

    month3 = String(transactions[transactions.length-1].date).split("/")[0];
    month2 = month3-1;
    month1 = month3-2;

    if(month2 < 1) {
        month2 = 12 - month2;
    }
    if(month1 < 1) {
        month1 = 12 - month1;
    }

    var month1Increase;
    var month2Increase;
    var month3Increase;
    var averageMonthlyIncrease;
    for(let i=0; i<transactions.length; i++){
        var transaction = transactions[i];
        var month = String(transaction.date).split("/")[0];
        //alert(month + " " + month1 + " " + (month1InitialBalance == null));
        if(month == month1 && month1InitialBalance == null) {
            month1InitialBalance = transaction.balance;
            //alert("Month1");
        } else if(month == month2 && month2InitialBalance == null) {
            month2InitialBalance = transaction.balance;
            //alert("Month2");
        } else if(month == month3 && month3InitialBalance == null) {
            month3InitialBalance = transaction.balance;
            //alert("Month3");
        } else {
            month3FinalBalance = transaction.balance;
            //alert("Month333");
        }
        

    }
    month1Increase = month2InitialBalance - month1InitialBalance;
    month2Increase = month3InitialBalance - month2InitialBalance;
    month3Increase = month3FinalBalance - month3InitialBalance;

    alert("Month1: " + month1Increase);
    alert("Month2: " + month2Increase);
    alert("Month3:  " + month3Increase);

    averageMonthlyIncrease = (month1Increase + month2Increase + month3Increase) / 3;

    alert("Average: " + averageMonthlyIncrease  );

    var nextMonth = parseInt(month3FinalBalance + averageMonthlyIncrease);
    var nextNextMonth = nextMonth + averageMonthlyIncrease;
    var nextNextNextMonth = nextNextMonth + averageMonthlyIncrease;

    alert("Next month: " + nextMonth);
    alert("Next Next month: " + nextNextMonth);
    alert("Next Next Next month: " + nextNextNextMonth);

    var nextMonthObject = {name: "Next Month", balance : parseInt(nextMonth)};
    var nextNextMonthObject = {name: "Next Next Month", balance : parseInt(nextNextMonth)};
    var nextNextNextMonthObject = {name: "Next Next Next Month", balance : parseInt(nextNextNextMonth)};

    return [nextMonthObject, nextNextMonthObject, nextNextNextMonthObject];
}

export default ProjectData;