import { Link } from "react-router-dom";
import { BackgroundBeams } from "../components/ui/background-beams";
import { useTheme } from "./ThemeContext";
import { useState } from "react";

export const LandingPage = () => {
  const { theme, toggleTheme } = useTheme(); 
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div className="min-h-screen flex flex-col relative bg-white dark:bg-black">
      <BackgroundBeams />
      <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center relative z-10">
        <h1 className="text-xl font-bold">My App</h1>
       
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        
        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <Link to="/signin" className="hover:underline text-white">
            Sign In
          </Link>
          <Link to="/signup" className="hover:underline text-white">
            Sign Up
          </Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </nav>
     
      {menuOpen && (
        <div
          className={`absolute top-16 right-0 rounded shadow-lg py-2 z-20 ${
            theme === "light" ? "bg-white" : "bg-black"
          }`}
        >
          <div className="flex flex-col space-y-2 px-4">
            <Link
              to="/signin"
              className={`hover:underline ${
                theme === "light" ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className={`hover:underline ${
                theme === "light" ? "text-black" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className={`hover:underline ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      )}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="text-center">
          <h2
            className={`text-3xl font-bold mb-4 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Welcome to My App
          </h2>
          <p
            className={`text-lg mb-6 ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Manage your blogs and sign in seamlessly.
          </p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className={`px-6 py-2 rounded border transition-all ${
                theme === "light"
                  ? "bg-white text-black border-black hover:bg-black hover:text-white"
                  : "bg-black text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className={`px-6 py-2 rounded border transition-all ${
                theme === "light"
                  ? "bg-white text-black border-black hover:bg-black hover:text-white"
                  : "bg-black text-white border-white hover:bg-white hover:text-black"
              }`}
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
      <footer
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        } text-center py-4 relative z-10`}
      >
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};



