import React from 'react';
import { Menubar } from './components/Menubar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FilterProps, Home } from './components/Home';
import { Feed } from './components/Feed';
import { Shop } from './components/Shop';
import { Profile } from './components/Profile';
import { PostContentContextProvider } from './utils/Contexts/PostContentContext';
import { HomeContentDTO } from './utils/DTOs/HomeContentDTO';
import { ErrorContextProvider } from './utils/Contexts/ErrorContext';
import { ErrorDTO } from './utils/DTOs/ErrorDTO';
import { ActiveTab, ActiveTabContextProvider } from './utils/Contexts/ActiveTabContext';
import { SessionContextProvider } from './utils/Contexts/SessionContext';

export const App = () => {
    const [activeTab, setActiveTab] = React.useState(ActiveTab.HOME);
    const [posts, setPosts] = React.useState<HomeContentDTO[]>([]);
    const [errors, setErrors] = React.useState<ErrorDTO[]>([]);
    const [filter, setFilter] = React.useState<FilterProps>({ userId: ""})

    const sessionId = "";

    return(
        <BrowserRouter>
            <SessionContextProvider value={{ sessionId }} >
                <ActiveTabContextProvider value={{ activeTab, setActiveTab }} >
                    <PostContentContextProvider value={{ posts, setPosts, filter, setFilter }}>
                        <ErrorContextProvider value={{ errors, setErrors }} >
                            <Switch>
                                <Route exact path="/feed" component={Feed} />
                                <Route exact path="/shop" component={Shop} />
                                <Route exact path="/profile" component={Profile} />
                                <Route path="/" component={Home} />
                            </Switch>
                            <Menubar />
                        </ErrorContextProvider>
                    </PostContentContextProvider>
                </ActiveTabContextProvider>
            </SessionContextProvider>
        </BrowserRouter>
    )
}