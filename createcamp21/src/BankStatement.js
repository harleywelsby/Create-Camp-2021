function BankStatement(){
    return (<div id="BankStatement" className="card-div" id="review">
            <h1>Review</h1>
            <table className="bank">
                <thead>
                    <tr>
                        <th>
                            Date and Time
                        </th>
                        <th>
                            Account Number
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody id="table-body">
                </tbody>
            </table>
        </div>);
}

export default BankStatement;