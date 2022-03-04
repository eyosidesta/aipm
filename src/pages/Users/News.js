import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../utils/ApiService/news.api";
import { getNewsAction } from "../../store/modules/admin/actions/index";
import NEWS_IMAGE from "../../assets/home_img.JPG";
import backgroundImage from "../../assets/home_new_img.png";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import TextImage from "../../components/Shared/TextImage";

const News = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        setIsLoading(true);
        const res = await getNews();
        setIsLoading(false);
        // dispatch({
        //     type: "GET_NEWS",
        //     payload: res
        // })
        dispatch(getNewsAction(res.data))

        
    }
    const item = {
        title: "wining souls for chirst",
        detail: `He who wins souls is wise. Remember God draws the hearts of
        men and it’s our job to point people back to Him. Soul
        winning is a process and takes time. Sometimes, our most
        effective witnessing tool is our lifestyle. According to
        Proverbs 11:30, our life is a message of hope and light that
        both reflects and is a representation of Christ.`,
        imageUrl: `${backgroundImage}`,
      };
    const newNews = useSelector(state => state.news);
    console.log(newNews.length,"newnews");
    const styles = {
        width: 80,
        height: 60,
        backgroundImage: backgroundImage,
        title: "AIPM News",
        description: "",
        borderRadius: 15
    }
    return (
        <>
            <ImageWithTextCenter styles={styles}/>
            {isLoading ? <div>loading...</div> : 
            <TextImage data={item}/>}
        </>
    )
}

export default News;