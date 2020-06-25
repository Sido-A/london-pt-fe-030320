import React from "react";
import Transactions from "../Main/transactions";

const Loans = ({loginUser}) => {
   const mappedUser = loginUser.map((l) => {
     return l.loans;
   });

  return (
    <div className="loans">
      <div className="loans-header">
        <div className="balance-header">
          {mappedUser.map((l) => (
            <p className="balance-amount">{l[0].balance}</p>
          ))}
          <p className="balance">Balance</p>
        </div>
        <div className="take-and-back-header">
          <p>PAY LOAN</p>
          <p>PAY BACK</p>
        </div>
      </div>
      <div className="transactions-wrapper">
        <div className="colum">
          <p className="transaction-colum">Transaction</p>
          <p className="amount-colum">Amount</p>
        </div>
        <Transactions mappedUser={mappedUser} />
      </div>
    </div>
  );
};

export default Loans;
