import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const persistedApp = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = useState(persistedApp);

  function login(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    <AppContext.Provider value={{ auth, login }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
