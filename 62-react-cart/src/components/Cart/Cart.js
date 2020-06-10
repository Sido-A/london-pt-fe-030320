import React from "react";
import Item from "../Cart/Item/Item";

const Cart = (props) => {
  const { cart, updateItem, deleteFromCart } = props;
  
  return (
    <ul>
      {cart.map((c, index) => (
        <Item
          id={c.id}
          index={index}
          name={c.name}
          quantity={c.quantity}
          updateItem={updateItem}
          deleteFromCart={deleteFromCart}
        />
      ))}
    </ul>
  );
};

export default Cart;
