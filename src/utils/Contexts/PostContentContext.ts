import React from 'react';
import { FilterProps } from '../../components/Home';
import { HomeContentDTO } from '../DTOs/HomeContentDTO';

export const PostContentContext = React.createContext(
    {
        posts: [] as HomeContentDTO[],
        setPosts: (posts: HomeContentDTO[]) => {},
        filter: { userId: ""} as FilterProps,
        setFilter: (filter: FilterProps) => {}
    }
)

export const PostContentContextProvider = PostContentContext.Provider;