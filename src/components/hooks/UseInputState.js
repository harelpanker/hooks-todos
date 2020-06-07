import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = (val) => {
    setValue(val);
  };
  const prevDefault = (e) => {
    e.preventDefault();
  };
  return [value, handleChange, reset, prevDefault];
};
