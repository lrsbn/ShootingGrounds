import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
    className?: string;
    disabled?: boolean;
    children?: React.ReactChild;
    roundedCorners?: boolean;
    to: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    active?: boolean;
}

export const LinkButton = (props: LinkButtonProps) => {
    const className = `atom-button link ${props.className || ""} ${props.roundedCorners ? "rounded" : ""} ${props.active ? "active" : ""}`;

    return(
        <Link
        className={className}
        to={props.to}
        onClick={props.onClick}
        >
        {props.children}
        </Link>

    )
}