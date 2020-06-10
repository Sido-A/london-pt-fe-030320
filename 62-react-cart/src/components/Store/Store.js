import React from "react";
import Item from "../Store/Item/Item";

const Store = (props) => {
  const { stock, addToCart } = props;

  return (
    <div>
      <h3>Store</h3>
      <ul>
        {stock.map((item) => (
          <Item
            item={item}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Store;
