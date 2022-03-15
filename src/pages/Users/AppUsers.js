import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirhanBuildingProject from "./BirhanBuildingProject";
import ContactUs from "./ContactUs";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Home from "./Home";
import MissionMovement from "./MissionMovement";
import News from "./News";
import PrayerMovement from "./PrayerMovement";
import StatementOfFaith from "./StatementOfFaith";
import Testimony from "./Testimony";
import UniversityStudentsMovement from "./UniversityStudentsMovement"
import Values from "./Values";
import VissionAndMission from "./VissionAndMission";
import WhoWeAre from "./WhoWeAre";

const AppUsers = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/prayer-movement" exact element={<PrayerMovement/>} />
          <Route path="/mission-movement" exact element={<MissionMovement/>} />
          <Route path="/university-students-movement" exact element={<UniversityStudentsMovement/>} />
          <Route path="/testimonies" exact element={<Testimony/>} />
          <Route path="/news" exact element={<News/>} />
          <Route path="/resources" exact element={<Home/>} />
          <Route path="/online-payemnt" exact element={<Home/>} />
          <Route path="/account-memeber" exact element={<Home/>} />
          <Route path="who-we-are" exact element={<WhoWeAre/>} />
          <Route path="/contact-us" exact element={<ContactUs/>} />
          <Route path="/about-us" exact element={<Home/>} />
          <Route path="/statement-of-faith" exact element={<StatementOfFaith/>} />
          <Route path="/values" exact element={<Values/>} />
          <Route path="/vission-and-mission" exact element={<VissionAndMission />} />
          <Route path="/staff-board-members" exact element={<Home/>} />
          <Route path="/staff-and-board/:id" element={<Home/>} />
          <Route path="/birhan-building-project" element={< BirhanBuildingProject/>} />
        </Routes>
        <Footer />
      </div>
  );
};

export default AppUsers;
