import React from "react";

const Transactions = ({ mappedUser }) => {
  const mappedTransaction = mappedUser.map((m) => {
    console.log(m[1].transactions);
    return m[1].transactions;
  });

  console.log(mappedTransaction[0]);

  return (
    <ul className="transaction-lists">
      {mappedTransaction[0].map((m) => (
        <li className="list">
          <p>{m.transaction}</p>
          {m.debit === "-" ? (
            <p>
              <span className="minus">{m.debit}</span>
              {m.amount}
            </p>
          ) : (
            <p>
              <span className="plus">{m.debit}</span>
              {m.amount}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Transactions;
