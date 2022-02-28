import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Home from "./Home";

const AppUsers = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/prayer-movement" exact element={<Header/>} />
          <Route path="/mission-movement" exact element={<Home/>} />
          <Route path="/university-students-movement" exact element={<Home/>} />
          <Route path="/testimonies" exact element={<Home/>} />
          <Route path="/news" exact element={<Home/>} />
          <Route path="/resources" exact element={<Home/>} />
          <Route path="/online-payemnt" exact element={<Home/>} />
          <Route path="/account-memeber" exact element={<Home/>} />
          <Route path="who-we-are" exact element={<Home/>} />
          <Route path="/contact-us" exact element={<Home/>} />
          <Route path="/statement-of-faith" exact element={<Home/>} />
          <Route path="/values" exact element={<Home/>} />
          <Route path="/vission-mission" exact element={<Home/>} />
          <Route path="/staff-and-board-members" exact element={<Home/>} />
          <Route path="/staff-and-board/:id" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
  );
};

export default AppUsers;
