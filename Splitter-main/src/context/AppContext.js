import React, { createContext, useState } from "react";
import { useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipPP, setTipPP] = useState(0);
  const [totalPP, setTotalPP] = useState(0);
  const [activeID, setActiveID] = useState();

  return (
    <AppContext.Provider
      value={{
        amount,
        setAmount,
        tip,
        setTip,
        people,
        setPeople,
        tipPP,
        setTipPP,
        totalPP,
        setTotalPP,
        activeID,
        setActiveID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
