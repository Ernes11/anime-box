import React from "react";

export const Button = ({text, type = "dark", action, link}) => {
  const clickHandler = () => {
    if (action) {
        action();
    }
  };
  return (
    <button
      onClick={() => {
        clickHandler();
      }}
      class={`btn ${type}`}
    >
      {text}
    </button>
  );
};
