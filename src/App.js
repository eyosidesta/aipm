
import { BACKGROUND_COLOR } from "./utils/constants/colors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import AppAdmin from "./pages/Admin/AppAdmin";
import AppUsers from "./pages/Users/AppUsers";
function App() {
  const [page, setPage] = useState("users");
  return (
    <Router>
      <div
        style={{ backgroundColor: `${BACKGROUND_COLOR}`, minHeight: "100vh" }}
      >
        {page == 'users' ? <AppUsers /> : <AppAdmin />}
      </div>
    </Router>
  );
}

export default App;
