import axios from "axios";
axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getNews = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
        console.log("res for news is ", res)
    }).catch(err => {
        console.log("error response is ", err)
    })
}

export const getNew = async (id) => {
    return await axios.get("https://jsonplaceholder.typicode.com/photo", id).then(res => {
        console.log("response of specific news is ", res)
    }).catch(err => {
        console.log("error response is ", err)
    })
}