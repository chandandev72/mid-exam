import { useState } from "react";
import "./DarkLight.css";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { useToggleContext } from "../../../../Hooks/useToggle";
const DarkLight = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(null);
  const { mode, dispatch_toggle } = useToggleContext();

  const handleToggle = () => {
    if (mode === "light") {
      setToggleDarkMode(!toggleDarkMode);
      dispatch_toggle({ type: "DARK" });
    } else {
      setToggleDarkMode(!toggleDarkMode);
      dispatch_toggle({ type: "LIGHT" });
    }
  };
  return (
    <div className="bg-themeColor p-1 rounded-full">
      {mode == 'dark' ?<input
        onClick={handleToggle}
        type="checkbox"
        className="checkbox"
        id="checkbox"
        defaultChecked
      />
      :
       <input
        onClick={handleToggle}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      /> }
      <label
        style={
          mode =='light'
            ? { backgroundColor: "gray" }
            : { backgroundColor: "#000" }
        }
        htmlFor="checkbox"
        className="checkbox-label"
      >
        <FaMoon className="fas fa-moon" />
        <FaSun
          style={
            mode =='light' ? { color: "white" } : { backgroundColor: "#000" }
          }
          className="fas fa-sun"
        />
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default DarkLight;
