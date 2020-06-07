import { useState } from "react";

function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  // return the state and the function
  return [state, toggle];
}

export default useToggle;
