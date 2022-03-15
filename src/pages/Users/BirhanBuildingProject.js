import React from "react";
import Project from "../../components/Shared/Project";
import BirhanBuildingImage from "../../assets/prayer_image.png";

const BirhanBuildingProject = () => {
  const data = {
    title: "Birhan Building",
    projectImage: BirhanBuildingImage,
    firstParagraph: `During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin.`,
    projectImageLists: [
      BirhanBuildingImage,
      BirhanBuildingImage,
      BirhanBuildingImage,
      BirhanBuildingImage,
      BirhanBuildingImage,
      BirhanBuildingImage,
      BirhanBuildingImage,
    ],
    secondTitle: "this is how it's going",
    secondparagraph: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few 
    high school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
    Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of 
    October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that 
    are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin 
    is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
    supprtTitle: "Support AIPM Ministry by building Birhan Bank",
    bankName: "Commercial Bank of Ethiopia",
    bankAccount: "1000000000000000000",
    payOnline: "Pay Online",
    link: "Click here",
  };
  return (
    <div>
      <Project data={data} />
    </div>
  );
};

export default BirhanBuildingProject;
