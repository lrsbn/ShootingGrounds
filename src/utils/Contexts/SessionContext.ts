import React from 'react';

export const SessionContext = React.createContext(
    {
        sessionId: "",
    }
);

export const SessionContextProvider = SessionContext.Provider;