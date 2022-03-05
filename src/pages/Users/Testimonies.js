import React from "react";
import backgroundImage from "../../assets/home_image_two.jpg";
import ImageWithTextCenter from ".";

const Testimonies = () => {
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
      <ImageWithTextCenter styles={styles} />
    </div>
  );
};
export default Testimonies;
