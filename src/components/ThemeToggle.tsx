import React from "react";

const ThemeToggle = ({ theme, toggleTheme }) => {
    const isLight = theme === "light";
    return (
        <button onClick={toggleTheme}>
            <img
                src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
                width="224"
                height="224"
                alt="Sun free icon"
                title="Sun free icon"
            />
            <img
                src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
                width="224"
                height="224"
                alt="Moon free icon"
                title="Moon free icon"
            />
        </button>
    );
};

export default ThemeToggle;
