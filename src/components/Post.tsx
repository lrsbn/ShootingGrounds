import React from 'react';
import { HomeContentDTO } from '../utils/DTOs/HomeContentDTO';

interface PostProps {
    post: HomeContentDTO;
}

export const Post = (props: PostProps) => {
    return(
        <div className="HomeContentPost">
            <h1>{props.post.header}</h1>
            <div className="post-content">
                {props.post.content}
            </div>
            <div className="post-timestamp">
                {props.post.createTime.toLocaleString()}
            </div>
        </div>
    )
}