import React, { useState, useEffect } from "react";

const Item = (props) => {
  const { id, index, name, quantity, updateItem, deleteFromCart } = props;
  const [inputValue, setInputValue] = useState(quantity);

  useEffect(() => {
    setInputValue(quantity);
    if (quantity === 0) {
      deleteFromCart(id, parseInt(inputValue));
    }
  }, [quantity]);

  const inputChange = (e) => {
    const quantityValue = e.target.value;
    setInputValue(quantityValue);
  };

  const handleUpdate = () => {
    const minusQuantity = quantity - inputValue;
    updateItem(id, parseInt(minusQuantity));
    setInputValue(inputValue);
  };

  const handleDelete = () => {
    deleteFromCart(id, inputValue);
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
