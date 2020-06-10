import React, { useState, useEffect } from "react";

const Item = (props) => {
  // console.log(props);
  const [inputValue, setInputValue] = useState("0");
  const [disabled, setDisabled] = useState(false);

  const { index, id, name, quantity, addToCart } = props;

  const inputChange = (e) => {
    const quantityValue = e.target.value;
    setInputValue(quantityValue);
  };

  const handleAddButton = () => {
    addToCart(index, id, parseInt(inputValue));
    if (inputValue == quantity) {
      setDisabled(!disabled);
      setInputValue("0");
    }
    setInputValue("0");
  };

  if (disabled === true) {
    if (quantity !== 0) {
      setDisabled(!disabled);
    }
  }

  return (
    <li>
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
    </li>
  );
};

export default Item;
