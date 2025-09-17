import React from "react";
import "../../sass/Card.scss"; // import SCSS

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
