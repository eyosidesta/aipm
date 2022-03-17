import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";

const AppAdmin = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" exact element={<SignIn />} />
            </Routes>
        </div>
    )
}

export default AppAdmin;