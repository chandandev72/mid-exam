import { useContext } from "react";
import { DLContext } from "../Contexts/DLContext";

export const useToggleContext = () => {
  const context = useContext(DLContext);
  if (!context) {
    throw new Error(
      "You must call useAuthContext inside a AuthContextProvider"
    );
  }
  return context;
};
