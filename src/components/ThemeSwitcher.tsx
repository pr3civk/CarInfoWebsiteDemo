import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || THEMES.LIGHT,
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme(THEMES.DARK);
    }
  }, []);

  useEffect(() => {
    if (theme === THEMES.DARK) {
      document.documentElement.classList.add(THEMES.DARK);
      localStorage.setItem("theme", THEMES.DARK);
    } else {
      document.documentElement.classList.remove(THEMES.DARK);
      localStorage.setItem("theme", THEMES.LIGHT);
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  return (
    <button
      onClick={handleThemeSwitcher}
      className="border-slate-700 rounded cursor-pointer dark:fill-white mb-4"
    >
      {theme === THEMES.DARK ? (
        <BsSunFill color="white" fontSize="1.5em" />
      ) : (
        <FaMoon color="#0369A1" fontSize="1.5em" />
      )}
    </button>
  );
};
