import axios, { AxiosResponse } from 'axios';

export type PageContentService = {
    loadAll: (filter: { userId?: string }) => Promise<AxiosResponse<any>>;
    load: (filter: { postId: string }) => Promise<AxiosResponse<any>>;
    create: (post: { header: string, content: string}) => Promise<AxiosResponse<any>>;
    change: (post: { postId: string, newContent: string }) => Promise<AxiosResponse<any>>;
    delete: (postId: string) => Promise<AxiosResponse<any>>;
}

export const pageContentService = new ( class PageContentServiceLocal implements PageContentService {
    
    private url = "http://localhost:3001";

    loadAll(filter: { userId?: string }) {
        const _url = `${this.url}/api/getContent/${filter?.userId}`;
        return axios.get(_url,);
    }

    load(filter: {postId: string}) {
        const _url = `${this.url}/api/getPost/${filter.postId}`;
        return axios.get(_url);
    }

    create(post: { header: string, content: string}) {
        const _url = `${this.url}/api/createPost/${post}`;
        return axios.post(_url,);
    }

    change(post: { postId: string, newContent: string }) {
        const _url = `${this.url}/api/changePost/${post}`;
        return axios.post(_url,);
    }

    delete(postId: string) {
        const _url = `${this.url}/api/deletePost/${postId}`;
        return axios.delete(_url);
    }
})();