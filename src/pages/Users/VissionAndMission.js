import React from "react";
import backgroundImage from "../../assets/ambaricho_mount.png";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";

const VissionAndMission = () => {
    const styles = {
        width: 80,
        height: 60,
        backgroundImage: backgroundImage,
        title: "AIPM News",
        description: "",
        borderRadius: 15,
      };
    return (
        <div>
            <div>working</div>
            <ImageWithTextCenter styles={styles}/>
        </div>
    )
}

export default VissionAndMission;