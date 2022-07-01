import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashboardPage from "./pages/dashboard/dashboard";
import UsersPage from "./pages/users/users";
import UsersDetailsPage from "./pages/users/user-details/user-details";
import UsersListController from "./controller/users-context";
import NotFoundPage from "./pages/404/404";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <UsersListController>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/:id" element={<UsersDetailsPage />} />
              <Route path="/404" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </UsersListController>
      </React.Fragment>
    </div>
  );
}

export default App;
