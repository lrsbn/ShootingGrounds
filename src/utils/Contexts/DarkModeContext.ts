import React from "react";

export const DarkModeContext = React.createContext(
    {
        darkMode: false,
        setDarkMode: (darkMode: boolean) => {}
    }
)

export const DarkModeContextProvider = DarkModeContext.Provider;