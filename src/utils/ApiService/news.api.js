import axios from "axios";
import { baseUrl } from "../constants/baseURL";
axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getNews = async () => {
    return await axios.get(`${baseUrl}`).then(res => {
        return res;
    }).catch(err => {
        return err
    })
}

export const getNew = async (id) => {
    return await axios.get(`${baseUrl}`, id).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}