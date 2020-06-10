import React, { useState, useEffect } from "react";

const Item = (props) => {
  const { item, updateCart } = props;
  const { id, name, quantity } = props.item;
  const [inputValue, setInputValue] = useState(quantity);

  useEffect(() => {
    setInputValue(quantity);
  }, [quantity]);

  const inputChange = (e) => {
    const quantityValue = e.target.value;
    setInputValue(quantityValue);
  };

  const handleUpdate = () => {
    const minusQuantity = quantity - inputValue;
    updateCart(id, parseInt(minusQuantity));
    setInputValue(inputValue);
  };

  const handleDelete = () => {
    updateCart(id, inputValue, 0);
  };

  return (
    <li key={id}>
      <span>{name}</span>
      <input
        onChange={inputChange}
        type="number"
        max={quantity}
        min="0"
        value={inputValue}
      />
      <button className="update" onClick={handleUpdate}>
        Update
      </button>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Item;
