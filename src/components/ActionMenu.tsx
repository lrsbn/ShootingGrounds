import React from 'react';
import { PostContentContext } from '../utils/Contexts/PostContentContext';

export const ActionMenu = () => {
    return(
        <div className="actionmenu">
            <ActionMenuButton />
        </div>
    )
}

interface ActionMenuButtonProps {
}

export const ActionMenuButton = (props: ActionMenuButtonProps) => {

    const { filter, setFilter } = React.useContext(PostContentContext);

    // Not Finished
    const applyFilter = () => {
        !filter.userId ? setFilter({
            userId: "User123"
        }) : setFilter({});
    }

    return(
        <button className="actionmenu-button" onClick={applyFilter}><i className="pi pi-filter" /></button>
    )
}