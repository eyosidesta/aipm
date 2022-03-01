import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../utils/ApiService/news.api";
import { getNewsAction } from "../../store/modules/admin/actions/index";
import NEWS_IMAGE from "../../assets/home_img.JPG";

const News = () => {
    const dispatch = useDispatch();
    const newNews = useSelector(state => state.news);
    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const res = await getNews();
        console.log("wow", res)
    }
    return (
        <div>
            <img src={NEWS_IMAGE} width={"90%"} height={300}/>
        </div>
    )
}

export default News;