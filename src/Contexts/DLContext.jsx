import { createContext, useReducer } from "react";

export const DLContext = createContext();

const initialState = {
  mode: localStorage.getItem('darkMode')?localStorage.getItem('darkMode'): "dark",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DARK": {
      localStorage.setItem("darkMode", "dark")
      return {
        ...state,
        mode: "dark",
      };
    }
    case "LIGHT": {
      localStorage.setItem("darkMode", "light")
      return {
        ...state,
        mode: "light",
      };
    }
    default:
      return state;
  }
};

export const DLContextProvider = ({ children }) => {
  const [state_toggle, dispatch_toggle] = useReducer(reducer, initialState);
  return (
    <DLContext.Provider value={{ ...state_toggle, dispatch_toggle }}>
      {children}
    </DLContext.Provider>
  );
};
