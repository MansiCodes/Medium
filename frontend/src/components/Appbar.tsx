import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { useTheme } from "../pages/ThemeContext";
import { useState } from "react";

export const Appbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navbarBgColor =
        theme === "light" ? "bg-white" : "bg-gray-800";

    const menuBgColor = theme === "light" ? "bg-white" : "bg-black";
    const toggleButtonBorder = theme === "light" ? "border-black" : "border-white";
    const hamburgerIconColor = theme === "light" ? "text-black" : "text-white";

    return (
        <div
    className={`border-b flex justify-between items-center px-4 py-4 w-full ${navbarBgColor} overflow-hidden`}
>
    <Link
        to={'/blogs'}
        className="text-xl font-bold cursor-pointer"
    >
        Medium
    </Link>

    {/* Hamburger Menu for Mobile */}
    <div className="flex items-center lg:hidden space-x-2">
        <Avatar size={"big"} name="mansi" theme={theme} />
        <button
            className={`${hamburgerIconColor} text-2xl`}
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
    </div>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center space-x-4">
        <Link to={`/publish`}>
            <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 rounded-full text-sm px-5 py-2.5"
            >
                New
            </button>
        </Link>
        <Avatar size={"big"} name="mansi" theme={theme} />
        <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded border transition-all ${toggleButtonBorder} ${
                theme === "light"
                    ? "bg-white text-black hover:bg-black hover:text-white"
                    : "bg-black text-white hover:bg-white hover:text-black"
            }`}
        >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
    </div>

    {/* Mobile Menu */}
    {/* Mobile Menu */}
{menuOpen && (
    <div
        className={`absolute top-20 right-0 ${menuBgColor} text-white py-4 px-6 z-10 rounded-md shadow-lg`}  
        style={{ minWidth: "200px" }}  
    >
        <div className="flex flex-col items-start space-y-4">
            <Link
                to="/publish"
                onClick={() => setMenuOpen(false)}
            >
                <button
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 rounded-full text-sm px-5 py-2.5"
                >
                    New
                </button>
            </Link>
            <button
                onClick={() => {
                    toggleTheme();
                    setMenuOpen(false);
                }}
                className={`px-4 py-2 rounded border transition-all ${toggleButtonBorder} ${
                    theme === "light"
                        ? "bg-white text-black hover:bg-black hover:text-white"
                        : "bg-black text-white hover:bg-white hover:text-black"
                }`}
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    </div>
)}


</div>

    );
};




