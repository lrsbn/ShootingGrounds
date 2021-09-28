import axios, { AxiosResponse } from "axios";


export type UserType = {
    loadUser: (sessionId: string) => Promise<AxiosResponse<any>>;
}

export const userService = new (class UserServiceLocal implements UserType {

    private url = `http://localhost:3001`

    loadUser(sessionId: string) {
        const _url = `${this.url}/api/getUser/${sessionId}`
        return axios.get(_url);
    }

})();