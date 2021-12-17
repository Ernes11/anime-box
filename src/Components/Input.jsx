import React, { useState} from "react";


export const Input = ({
  value = "",
  placeholder = "Placeholder",
  type = "text",
  action,
}) => {
  const [text, setText] = useState(value);
  const changeText = (e) => {
       setText(e.target.value)
      if(action) {
          action(text)
      }
  }
  return (
    <div className="input">
      <input value={text}type={type} onChange={e => changeText(e)} placeholder={placeholder} />
    </div>
  );
};
