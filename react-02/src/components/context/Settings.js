import React, { useContext } from "react";
import { ThemeContext } from "../context/context";
const Settings = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="settings">
      <h3>Select Theme:</h3>
      <button onClick={toggleTheme}> Toggle the theme </button>
    </div>
  );
};

export default Settings;
