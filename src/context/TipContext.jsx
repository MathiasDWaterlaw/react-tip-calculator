import { createContext, useContext, useState } from "react";

const TipContext = createContext();

export default function TipContextProvider({ children }) {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);

  return (
    <TipContext.Provider
      value={{ bill, setBill, tip, setTip, peopleNumber, setPeopleNumber }}
    >
      {children}
    </TipContext.Provider>
  );
}

export function useTipContext() {
  return useContext(TipContext);
}
