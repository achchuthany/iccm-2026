import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    // Tailwind dark mode (class strategy) — only the html element needs `dark`
    root.classList.toggle("dark", isDark);

    // Keep a minimal signal for other consumers
    root.dataset.theme = theme;
    root.dataset.mode = theme;

    // Align native color-scheme for form controls/scrollbars
    root.style.colorScheme = isDark ? "dark" : "light";

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      const saved = localStorage.getItem("theme");
      if (saved !== "light" && saved !== "dark") {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
