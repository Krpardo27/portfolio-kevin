import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, 50); 

    return () => clearTimeout(timeoutId); 
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="top-5 right-5 absolute p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-300 shadow-md hover:scale-105 transition duration-300 ease-in-out z-50"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <FaSun className="text-xl" />
      ) : (
        <FaMoon className="text-xl" />
      )}
    </button>
  );
};
