import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const signIn = async (credentials) => {
    return await axios.post(`${baseUrl}/posts`, {
        title: credentials.email,
        body: credentials.password,
        userId: 1,
    }).then(res => {
        console.log("response is ", res)
        return res;
    }).catch(err => {
        return err;
    })
}

