import axios from "axios";

axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getTestimonies = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

export const getTestimony = async (id) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/post/${id}`).then(res => {
        return res
    }).catch(err => {
        return err;
    })
}