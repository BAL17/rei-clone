import { createContext, useState } from "react";

const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState([]);

  return (
    <TotalContext.Provider
      value={{
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
};

export default TotalContext;
