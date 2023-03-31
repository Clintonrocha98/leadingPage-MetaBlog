import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../SVG";
import styles from "./styles.module.scss";

export const Switch = () => {
  const [theme, setIsActive] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const newTheme = storedTheme ? storedTheme : "light";
    
    localStorage.setItem("theme", newTheme);

    setIsActive(newTheme);

    document.documentElement.setAttribute("color-mode", newTheme);
  }, []);

  function hundleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setIsActive(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("color-mode", newTheme);
  }

  return (
    <button
      onClick={hundleTheme}
      className={styles.switch}
      aria-label="Change color scheme"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
