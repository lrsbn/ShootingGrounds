import React from 'react';
import { ErrorDTO } from '../utils/DTOs/ErrorDTO';

interface ErrorMessageProps {
    error: ErrorDTO;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    return(
        <div className="error">
            <h1>{props.error.errorHeader}</h1>
            {props.error.errorMessage}
        </div>
    )
}