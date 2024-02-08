import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DLContextProvider } from "./Contexts/DLContext.jsx";
import { AuthContextProvider } from "./Contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DLContextProvider>
        <App />
        {/* <App /> */}
      </DLContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
