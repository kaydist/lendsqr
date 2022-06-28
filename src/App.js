import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardPage from "./pages/dashboard/dashboard";
import UsersPage from "./pages/users/users";
import UsersDetailsPage from "./pages/users/user-details/user-details";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UsersDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
