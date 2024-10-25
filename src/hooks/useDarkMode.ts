import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useDarkMode() {
  //initializes theme state based on user preference or system theme
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;

    //take the system theme if no preference have been saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  //apply the theme class when loading the component and whenever the state changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme == "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  //toggle between the dark and light theme
  const toggleTheme = () => {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
