import React, { useState } from "react";
import "./index.css";
import Requirements from "./Requirements";

function App() {
  const [theme, setTheme] = useState(true);

  const handleToogle = () => {
    setTheme(!theme);
    // document.body.className = newTheme;
    // localStorage.setItem('theme', newTheme);
  };

  return (
    <main
      className={`h-screen relative ${
        theme === true ? "bg-gray-900" : "bg-gray-300"
      }`}
    >
      <h1 className="text-blue-400 text-3xl w-[70%] mx-auto p-4 font-semibold text-center">
        Razorpay Payment Integration - REACT
      </h1>

      <div className="absolute top-2 right-5">
        {theme === true ? (
          <button
            onClick={handleToogle}
            className="text-black text-2xl bg-white p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={handleToogle}
            className="text-white text-2xl bg-black p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
        )}
      </div>

      <Requirements theme={theme} />
    </main>
  );
}

export default App;
