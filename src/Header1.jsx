import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher"; // Import ThemeSwitcher
import "./themes.css"; // Import themes.css file

function Header1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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

    // Load theme on page load
    useEffect(() => {
        document.body.className = theme; // Apply theme when component loads
    }, [theme]);

    return (
        <div className={`header ${theme}`}>
            <button className="mButton" onClick={toggleMenu}>Menu</button>

            {/* Menu box */}
            {isMenuOpen && <ThemeSwitcher changeTheme={changeTheme} />}
        </div>
    );
}

export default Header1;
