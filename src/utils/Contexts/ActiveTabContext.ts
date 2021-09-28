import React from 'react';

export enum ActiveTab {
    HOME = "HOME",
    FEED = "FEED",
    SHOP = "SHOP",
    PROFILE = "PROFILE"
}

export const ActiveTabContext = React.createContext(
    {
        activeTab: ActiveTab.HOME,
        setActiveTab: (activeTab: ActiveTab) => {}
    }
);

export const ActiveTabContextProvider = ActiveTabContext.Provider;