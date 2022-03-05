import axios from "axios";
axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getNews = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
        return res;
    }).catch(err => {
        return err
    })
}

export const getNew = async (id) => {
    return await axios.get("https://jsonplaceholder.typicode.com/photo", id).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}