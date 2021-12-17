import React from "react";
import {Arrow} from '../assets/images/icons/Arrow';

export const CircleButton = (type = "dark", link) => {
  return (
    <button
      className={`circle-btn ${type}`}
    >
      <Arrow color={type == 'dark' ? 'black' : 'white'}/>
    </button>
  )
};