import React from "react";
import Item from "../Store/Item/Item";

const Store = (props) => {
  const { stock, addToCart } = props;

  return (
    <ul>
      {stock.map((s, index) => (
        <Item
          id={s.id}
          index={index}
          name={s.name}
          quantity={s.quantity}
          addToCart={addToCart}
        />
      ))}
    </ul>
  );
};

export default Store;
