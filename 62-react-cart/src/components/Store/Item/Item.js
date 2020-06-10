import React, { useState, useEffect } from "react";

const Item = (props) => {
  const [inputValue, setInputValue] = useState("0");
  const [disabled, setDisabled] = useState(false);

  const { addToCart } = props;
  const { index, id, name, quantity } = props.item;

  const inputChange = (e) => {
    const quantityValue = e.target.value;
    setInputValue(quantityValue);
  };

  const handleAddButton = () => {
    if (inputValue !== 0) {
      addToCart(id, parseInt(inputValue));
      if (parseInt(inputValue)  === quantity) {
        setDisabled(!disabled);
        setInputValue("0");
      }
      setInputValue("0");
    }
  };

  if (disabled === true) {
    if (quantity !== 0) {
      setDisabled(!disabled);
    }
  }

  return (
    <li key={index}>
      <span>{name}</span>
      <input
        onChange={inputChange}
        type="number"
        max={quantity}
        min="0"
        value={inputValue}
        disabled={disabled}
      />
      <button onClick={handleAddButton} disabled={disabled}>
        Add to cart
      </button>
      {quantity === 0 && <label className="label">Out of Stock</label>}
    </li>
  );
};

export default Item;
