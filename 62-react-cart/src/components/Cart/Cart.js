import React from "react";
import Item from "../Cart/Item/Item";

const Cart = (props) => {
  const { cart, updateCart } = props;

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item) => (
          <Item item={item} updateCart={updateCart} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
