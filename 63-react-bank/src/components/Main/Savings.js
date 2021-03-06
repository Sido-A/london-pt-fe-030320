import React from "react";
import Transactions from "../Main/transactions";

const Savings = ({ loginUser }) => {
  const mappedUser = loginUser.map((l) => {
    return l.savings;
  });
  return (
    <div className="savings">
      <div className="savings-header">
        <div className="balance-header">
          {mappedUser.map((l) => (
            <p className="balance-amount">{l[0].balance}</p>
          ))}
          <p className="balance">Balance</p>
        </div>
        <div className="pay-in-out-header">
          <p>PAY IN</p>
          <p>PAY OUT</p>
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

export default Savings;
