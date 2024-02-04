import { useState, createContext } from "react";

const ProductContext = createContext();

const Context = ({ children }) => {
  const [options, setOption] = useState([]);
  // ("children", children);
  return (
    <ProductContext.Provider value={{ options, setOption }}>
      {children}
    </ProductContext.Provider>
  );
};

export { Context, ProductContext };