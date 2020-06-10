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
  const localStock = [...stock];
  const localCart = [...cart];

  const addToCart = (id, quantity) => {
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

  const updateCart = (id, minusQuantity, zero) => {
    if (zero === 0) {
      localStock[id - 1].quantity += minusQuantity;
      const inCart = localCart.findIndex((item) => item.id === id);

      if (inCart !== -1) {
        localCart[inCart].quantity = minusQuantity;
      }

      const filter = localCart.filter((c) => c.id !== id);
      setCart(filter);
      setStock(localStock);

    } else {
      localStock[id - 1].quantity += minusQuantity;
      const inCart = localCart.findIndex((item) => item.id === id);

      if (inCart !== -1) {
        localCart[inCart].quantity -= minusQuantity;
      } else {
        localCart.push({ ...localStock[id - 1], quantity: minusQuantity });
      }

      setCart(localCart);
      setStock(localStock);
    }
  };

  const deleteItem = (id, quantity) => {
    stock[id - 1].quantity += quantity;

    const updateCart = cart.filter((c) => c.quantity !== 0);

    setCart(updateCart);
    setStock(stock);
  };

  return (
    <div className="app">
      <div className="store">
        <Store stock={stock} addToCart={addToCart} />
      </div>
      <div className="cart">
        <Cart cart={cart} updateCart={updateCart} />
      </div>
    </div>
  );
};

export default App;
