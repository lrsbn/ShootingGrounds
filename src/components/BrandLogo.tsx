import React from 'react';

interface BrandLogoProps {
    onClick: () => void;
}

export const BrandLogo = (props: BrandLogoProps) => {
    return(
        <div className="brandlogo" onClick={props.onClick}>
            BrandLogo
        </div>
    )
}