// src/components/Card.jsx
import React, { useState } from "react";
import "./Card.css";

const Card = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <div className="controls">
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  );
};

export default Card;
