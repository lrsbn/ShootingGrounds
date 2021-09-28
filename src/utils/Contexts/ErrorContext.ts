import React from 'react';
import { ErrorDTO } from '../DTOs/ErrorDTO';

export const ErrorContext = React.createContext(
    {
        errors: [] as ErrorDTO[],
        setErrors: (errors: ErrorDTO[]) => {}
    }
)

export const ErrorContextProvider = ErrorContext.Provider;