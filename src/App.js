import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import UsersPage from "./pages/user";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
