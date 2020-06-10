import React from "react";
import Item from "../Cart/Item/Item";

const Cart = (props) => {
  const { cart, deleteItem, updateCart } = props;

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item) => (
          <Item item={item} deleteItem={deleteItem} updateCart={updateCart} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
