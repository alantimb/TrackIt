import { createContext, useState } from "react";

const AdvanceContext = createContext();

export function AdvanceProvider({ children }) {
  const [advance, setAdvance] = useState("");

  function upAdvance(adv, ttl) {
    if (ttl === 0) {
      setAdvance(0);
      return;
    }
    setAdvance((adv / ttl) * 100);
  }

  return (
    <AdvanceContext.Provider value={{ advance, upAdvance }}>
      {children}
    </AdvanceContext.Provider>
  );
}

export default AdvanceContext;
