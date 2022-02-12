import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const UseGlobalContext = () => {
  const msg = useContext(GlobalContext);
  return (
    <>
      <h2>{msg}</h2>
    </>
  );
};

export default UseGlobalContext;
