import React, { useState, useEffect, useRef } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import "./themes.css";

function Header1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const menuRef = useRef(null); // Ref to detect outside clicks

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to change theme
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        document.body.className = newTheme; // Apply theme to <body>
        localStorage.setItem("theme", newTheme); // Store in localStorage
        setIsMenuOpen(false); // Close menu after selection
    };

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    // Load theme on page load
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`Main ${theme}`}>
            <div className="header">
                <button className="mButton" onClick={toggleMenu}>Theme</button>
                {isMenuOpen && (
                    <div ref={menuRef}>
                        <ThemeSwitcher changeTheme={changeTheme} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header1;