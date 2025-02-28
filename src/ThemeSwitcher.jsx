import React from "react";

function ThemeSwitcher({ changeTheme }) {
    return (
        <div className="menu-box">
            <button className="lightTheme" onClick={() => changeTheme("light")}>Light Mode</button>
            <button className="DarkTheme" onClick={() => changeTheme("dark")}>Dark Mode</button>
        </div>
    );
}

export default ThemeSwitcher;
