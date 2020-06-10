import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "butter",
    quantity: 20,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);

  const addToCart = (index, id, quantity) => {
    const localStock = [...stock];
    const localCart = [...cart];
    localStock[id - 1].quantity -= quantity;
    const inCart = localCart.findIndex((item) => item.id === id);

    if (inCart !== -1) {
      localCart[inCart].quantity += quantity;
    } else {
      localCart.push({ ...localStock[id - 1], quantity: quantity });
    }
    setCart(localCart);
    setStock(localStock);
  };

  const updateItem = (id, minusQuantity) => {
    const localStock = [...stock];
    const localCart = [...cart];
    localStock[id - 1].quantity += minusQuantity;
    const inCart = localCart.findIndex((item) => item.id === id);

    console.log("minusQuantity", minusQuantity);

    if (inCart !== -1) {
      localCart[inCart].quantity -= minusQuantity;
    } else {
      localCart.push({ ...localStock[id - 1], quantity: minusQuantity });
    }
    setCart(localCart);
    setStock(localStock);
  };

  const deleteFromCart = (id, quantity) => {
    const localStock = [...stock];
    const localCart = [...cart];
    localStock[id - 1].quantity += quantity;
    const inCart = localCart.findIndex((item) => item.id === id);

    if (inCart !== -1) {
      localCart[inCart].quantity -= quantity;
    } else {
      localCart.push({ ...localStock[id - 1], quantity: quantity });
    }
    const filter = localCart.filter((c) => c.id !== id);

    setCart(filter);
    setStock(localStock);
  };

  return (
    <div className="app">
      <div className="store">
        <h3>Store</h3>
        <Store stock={stock} addToCart={addToCart} />
      </div>
      <div className="cart">
        <h3>Cart</h3>
        <Cart
          cart={cart}
          updateItem={updateItem}
          deleteFromCart={deleteFromCart}
        />
      </div>
    </div>
  );
};

export default App;
