import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DashBoard from "./DashBoard";
import SideNav from "./SideNav";
import SignIn from "./SignIn";

const AppAdmin = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname !== "/login" ? <SideNav /> : <SignIn />}
            {/* <Routes>
                <Route path="/login" exact element={<SignIn />} />
                <Route path="/" exact element={<DashBoard />}/>
            </Routes> */}
        </div>
    )
}

export default AppAdmin;