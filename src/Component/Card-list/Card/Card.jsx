import React from "react";
import "./Card.css";

function Card({ monster }) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={monster.name}
      />
      <h3>{monster.name}</h3>
      <h3>{monster.email}</h3>
    </div>
  );
}

export default Card;
