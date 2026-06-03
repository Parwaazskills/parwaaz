"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "parwaaz-theme";

function applyTheme(darkMode: boolean) {
  document.documentElement.classList.toggle("dark", darkMode);
  document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
}

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    const shouldUseDark = savedTheme === "dark";

    setDarkMode(shouldUseDark);
    applyTheme(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode((value) => {
      const nextValue = !value;

      applyTheme(nextValue);
      window.localStorage.setItem(STORAGE_KEY, nextValue ? "dark" : "light");

      return nextValue;
    });
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${darkMode ? "is-dark" : ""}`}
      role="switch"
      aria-checked={darkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb" />
        <span className="theme-toggle-icon" aria-hidden="true">
          <Sun size={15} strokeWidth={2.2} />
        </span>
        <span className="theme-toggle-icon" aria-hidden="true">
          <Moon size={14} strokeWidth={2.2} />
        </span>
      </span>
    </button>
  );
}
