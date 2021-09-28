import React from 'react';
import { ActiveTab, ActiveTabContext } from '../utils/Contexts/ActiveTabContext';
import { LinkButton } from './atoms/LinkButton';

export const Menubar = () => {

    const { activeTab, setActiveTab } = React.useContext(ActiveTabContext);

    const showHome = () => {
        activeTab !== ActiveTab.HOME && setActiveTab(ActiveTab.HOME);
    }

    const showFeed = () => {
        activeTab !== ActiveTab.FEED && setActiveTab(ActiveTab.FEED);
    }

    const showShop = () => {
        activeTab !== ActiveTab.SHOP && setActiveTab(ActiveTab.SHOP);
    }

    const showProfile = () => {
        activeTab !== ActiveTab.PROFILE && setActiveTab(ActiveTab.PROFILE);
    }


    return(
        <div className="menubar">
            {/* Als Icons */}
            <LinkButton onClick={showHome} to="/" active={activeTab === ActiveTab.HOME}><span className="pi pi-home" /></LinkButton>
            <LinkButton onClick={showFeed} to="/feed" active={activeTab === ActiveTab.FEED}><span className="pi pi-search" /></LinkButton>
            <LinkButton onClick={showShop} to="/shop" active={activeTab === ActiveTab.SHOP}><span className="pi pi-shopping-cart" /></LinkButton>
            <LinkButton onClick={showProfile} to="/profile" active={activeTab === ActiveTab.PROFILE}><span className="pi pi-user" /></LinkButton>
        </div>
    )
}