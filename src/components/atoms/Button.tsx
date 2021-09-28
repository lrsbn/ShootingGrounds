import React from 'react';

interface ButtonProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    onSubmit?: React.FormEventHandler<HTMLButtonElement>;
    children?: React.ReactChild;
    roundedCorners?: boolean;
}

export const Button = (props: ButtonProps) => {
    const className = `atom-button ${props.className} ${props.roundedCorners && "rounded"}`;

    return(
        <button
        className={className}
        onClick={props.onClick}
        disabled={props.disabled}
        onSubmit={props.onSubmit}
        >
        {props.children}
        </button>

    )
}