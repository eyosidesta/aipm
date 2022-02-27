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
          <Route path="/" exact component={Home} />
          <Route path="/prayer-movement" exact component={Home} />
          <Route path="/mission-movement" exact component={Home} />
          <Route path="/university-students-movement" exact component={Home} />
          <Route path="/testimonies" exact component={Home} />
          <Route path="/news" exact component={Home} />
          <Route path="/resources" exact component={Home} />
          <Route path="/online-payemnt" exact component={Home} />
          <Route path="/account-memeber" exact component={Home} />
          <Route path="who-we-are" exact component={Home} />
          <Route path="/contact-us" exact component={Home} />
          <Route path="/statement-of-faith" exact component={Home} />
          <Route path="/values" exact component={Home} />
          <Route path="/vission-mission" exact component={Home} />
          <Route path="/staff-and-board-members" exact component={Home} />
          <Route path="/staff-and-board/:id" component={Home} />
        </Routes>
        <Footer />
      </div>
  );
};

export default AppUsers;
