import React, { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  return (
        <GlobalContext.Provider value={"This is from Global Context."}>
            {props.children}
        </GlobalContext.Provider>
    ) 
 
};

export default GlobalContextProvider;
