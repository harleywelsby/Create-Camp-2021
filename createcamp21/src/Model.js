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

    alert("Month1: " + month1  + " Month2: " + month2 + " Month3: " + month3)

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

    alert(month1InitialBalance + " : " + month2InitialBalance + " : " + month1Increase);
    alert(month2InitialBalance + " : " + month3InitialBalance + " : " + month2Increase);
    alert(month3InitialBalance + " : " + month3FinalBalance + " : " + month3Increase);

    averageMonthlyIncrease = (month1Increase + month2Increase + month3Increase) / 3;

    var nextMonth = month3FinalBalance + averageMonthlyIncrease;
    var nextNextMonth = nextMonth + averageMonthlyIncrease;
    var nextNextNextMonth = nextNextMonth + averageMonthlyIncrease;

    var nextMonthObject = {name: "Bills", spendings : nextMonth};
    var nextNextMonthObject = {name: "Bills", spendings : nextNextMonth};
    var nextNextNextMonthObject = {name: "Bills", spendings : nextNextNextMonth};

    return [nextMonthObject, nextNextMonthObject, nextNextNextMonthObject];
}

export default ProjectData;