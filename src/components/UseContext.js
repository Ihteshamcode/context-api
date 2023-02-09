import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const name = "ihtesham ul haq";
  return <AppContext.Provider value={name}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
