import React from "react";
import Transactions from "../Main/transactions";

// Wallet
const Wallet = ({ loginUser }) => {
  // console.log(loginUser);
  const mappedUser = loginUser.map((l) => {
    return l.wallet;
  });

  return (
    <div className="wallet">
      <div className="wallet-header">
        <div className="balance-header">
          {mappedUser.map((l) => (
            <p className="balance-amount">{l[0].balance}</p>
          ))}
          <p className="balance">Balance</p>
        </div>
        <div className="avatar-header">
          <img alt="avatar" />
          <p>date</p>
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

export default Wallet;
