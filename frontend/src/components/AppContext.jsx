import { createContext, useState } from "react";

export const AppContext = createContext();
// export const useAppContext = () => useContext(AppContext); // vite doesn't like this encapsulation

export const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState("n/a");
  const [role, setRole] = useState("n/a role");

  return (
    <AppContext.Provider value={{ token, setToken, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};
