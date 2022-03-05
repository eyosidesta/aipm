import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Home from "./Home";
import News from "./News";
import PrayerMovement from "./PrayerMovement";
// import Testimonies from "./Testimonies";
import UniversityStudentsMovement from "./UniversityStudentsMovement"
import Values from "./Values";
import VissionAndMission from "./VissionAndMission";

const AppUsers = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/prayer-movement" exact element={<PrayerMovement/>} />
          <Route path="/mission-movement" exact element={<Home/>} />
          <Route path="/university-students-movement" exact element={<UniversityStudentsMovement/>} />
          <Route path="/testimonies" exact element={<Home/>} />
          <Route path="/news" exact element={<News/>} />
          <Route path="/resources" exact element={<Home/>} />
          <Route path="/online-payemnt" exact element={<Home/>} />
          <Route path="/account-memeber" exact element={<Home/>} />
          <Route path="who-we-are" exact element={<Home/>} />
          <Route path="/contact-us" exact element={<Home/>} />
          <Route path="/about-us" exact element={<Home/>} />
          <Route path="/statement-of-faith" exact element={<Home/>} />
          <Route path="/values" exact element={<Values/>} />
          <Route path="/vission-mission" exact element={<VissionAndMission />} />
          <Route path="/staff-board-members" exact element={<Home/>} />
          <Route path="/staff-and-board/:id" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
  );
};

export default AppUsers;
