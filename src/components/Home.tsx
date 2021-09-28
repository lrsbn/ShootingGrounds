import React, { useEffect, useState } from "react"
import { pageContentService } from "../utils/Services/PageContentService";
import { posts as contentPosts } from "../utils/testData/posts";
import { errors as postErrors } from '../utils/testData/errors';
import { BrandLogo } from "./BrandLogo";
import { ErrorMessage } from "./ErrorMessage";
import { Post } from "./Post";
import { PostContentContext } from "../utils/Contexts/PostContentContext";
import { ErrorContext } from "../utils/Contexts/ErrorContext";
import { HomeContentDTO } from "../utils/DTOs/HomeContentDTO";
import { ActionMenu } from "./ActionMenu";

export interface FilterProps {
    userId?: string;
}

export const Home = () => {

    const [loading, setLoading] = useState(false);
    const [postsFiltered, setPostsFiltered] = useState<HomeContentDTO[]>();

    const { posts, setPosts, filter } = React.useContext(PostContentContext);
    const { errors, setErrors } = React.useContext(ErrorContext);

    useEffect(() => {
        if (filter.userId) {
            const filteredPosts = posts.filter(post => post.userId === filter.userId);
            setPostsFiltered(filteredPosts);
        } else {
            setPostsFiltered(posts);
        }
        // loadContent()
        // eslint-disable-next-line
    }, [filter])

    useEffect(() => {
        loadContent();
        // eslint-disable-next-line
    }, []);

    const loadContent = async () => {
        document.getElementById("Scroller")?.scrollIntoView({ behavior: "smooth"});
        if (!loading) {
            setLoading(true);
            pageContentService.loadAll(filter).then(res => {
                setPosts(res.data);
            }).catch(err => {
                // setErrors(err);
            }).finally(() => {
                setLoading(false);

                // Testdaten
                setPosts(contentPosts);
                setPostsFiltered(contentPosts);
                setErrors(postErrors);
            });
        }
    }

    return(
        <div>
            <BrandLogo onClick={loadContent}/>
            <span id="Scroller" />
            <div className="content">
                {loading && <div className="loadingicon-wrapper"><i className="loadingicon pi pi-spin pi-spinner"/></div>}
                {errors && errors?.map(error => {
                    return <ErrorMessage error={error} key={error.errorKey}/>
                })}
                {postsFiltered && postsFiltered?.map(post => {
                    return <Post post={post} key={post.messageKey} />
                })}
            </div>
            <ActionMenu />
        </div>
    )
}