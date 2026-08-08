import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-label">{isDark ? "DARK" : "LIGHT"}</span>

        <span className="theme-toggle-thumb">
          {isDark ? <Moon size={12} /> : <Sun size={12} />}
        </span>
      </span>
    </button>
  );
}
