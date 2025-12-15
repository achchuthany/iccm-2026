import { useTheme } from "../hooks/useTheme";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:border-blue-400 dark:hover:border-blue-400 transition-colors duration-200 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm0 17a1 1 0 0 1-1 1V22a1 1 0 1 1 2 0v-1.5a1 1 0 0 1-1-1Zm7.5-7.5a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1Zm-17 0a1 1 0 0 1 1-1H2a1 1 0 1 1 0 2h1.5a1 1 0 0 1-1-1Zm14.95 5.45a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41Zm-12-12a1 1 0 0 1 1.41 0L6.92 6.01A1 1 0 0 1 5.5 7.42L4.44 6.36a1 1 0 0 1 0-1.41Zm12 0 1.06-1.06a1 1 0 1 1 1.41 1.41L19.87 7.42a1 1 0 1 1-1.41-1.41ZM4.44 17.64l1.06-1.06a1 1 0 1 1 1.41 1.41L5.85 19.05a1 1 0 1 1-1.41-1.41ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
