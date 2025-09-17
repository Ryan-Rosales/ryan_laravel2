import React from "react";
import "../../sass/Button.scss"; // import SCSS

function Button({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
