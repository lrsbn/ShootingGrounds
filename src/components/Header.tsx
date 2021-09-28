import React from 'react';
import { DarkModeContext } from '../utils/Contexts/DarkModeContext';

export const Header = () => {

    const { darkMode, setDarkMode } = React.useContext(DarkModeContext);

    const className = (componentClassName?: string) => `${componentClassName} ${darkMode ? "darkMode" : ""}`;

    return(
        <div className="header-wrapper">
            <div className={className("header")}>
                <div className="header-content">
                    <a className={className()} href="/">Home</a>
                    <button className={className()} onClick={() => setDarkMode(!darkMode)}>Darkmode</button>
                </div>
            </div>
        </div>
    )
}