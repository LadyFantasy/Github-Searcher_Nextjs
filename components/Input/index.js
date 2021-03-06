import Styles from "../../styles/Input.module.css";
// import { useState } from "react";

export default function Input({ onChange, value, name, placeholder, onKeyPress }) {
  // const [inputValue, setInputValue] = useState("");

  // function handleChange(e) {
  //   handleCallback(e.target.value);
  // }

  return (
    <input
      placeholder={placeholder}
      type="text"
      onKeyPress={onKeyPress}
      onChange={onChange}
      className={Styles.input}
      value={value}
      name={name}
    />
  );
}
