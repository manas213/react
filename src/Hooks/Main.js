import React from "react";
import GlobalContextProvider from "./GlobalContext";
import Props from "./Props";
import UseGlobalContext from "./UseGlobalContext";

const Main = () => {
  return (
    <>
      <Props text={"Hello"} user="Manas"></Props>
      <GlobalContextProvider>
          <UseGlobalContext />
      </GlobalContextProvider>
    </>
  );
};

export default Main;
