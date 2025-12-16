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
      // Only update from system preference if user hasn't manually set a theme
      const saved = localStorage.getItem("theme");
      const userManuallySet = localStorage.getItem("theme-manually-set");
      
      // System preference only applies when:
      // 1. User hasn't manually toggled the theme, AND
      // 2. No theme is saved (brand new user or cleared storage)
      // This preserves both manual choices and previously saved themes
      if (!userManuallySet && (saved === null || saved === "")) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    // Mark that user has manually set the theme
    localStorage.setItem("theme-manually-set", "true");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
