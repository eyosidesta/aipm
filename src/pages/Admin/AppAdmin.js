import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import DashBoard from "./DashBoard";

const AppAdmin = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" exact element={<SignIn />} />
                <Route path="/" exact element={<DashBoard />}/>
            </Routes>
        </div>
    )
}

export default AppAdmin;