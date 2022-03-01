import axios from "axios";

axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getTestimonies = async () => {
    return await axios.get("posts").then(res => {
        console.log("testimony response is ", res)
    })
}

export const getTestimony = async (id) => {
    return await axios.get("post/"+id).then(res => {
        console.log("response for specific testimony is ", res)
    })
}