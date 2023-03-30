import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../SVG";
import styles from "./styles.module.scss";

export const Switch = () => {
  const [isActive, setIsActive] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localStorage.setItem("theme", localTheme);
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  function hundleTheme() {
    setIsActive(!isActive);
    const newTheme = isActive ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("color-mode", newTheme);
  }

  return (
    <button onClick={hundleTheme} className={styles.switch}>
      {isActive ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
