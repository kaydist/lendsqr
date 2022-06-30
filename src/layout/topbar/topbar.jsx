import React from "react";
import "./_topbar.scss";
import Input from "../../components/common/input/input";

//icons
import User from "../../assets/brand/user.png";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Logo } from "../../assets/brand/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";

export default function Topbar() {
  const toggleSidebar = () => {
    document.querySelector(".sidebar").classList.toggle("open");
  };

  return (
    <div className="topbar">
      <div className="logo-container">
        <button className="icon" onClick={toggleSidebar}>
          <Menu />
        </button>

        <div className="logo">
          <Logo />
        </div>
      </div>

      <div className="topbar-content">
        <div className="search">
            <Input
              type="text"
              name="search"
              placeholder="Search for anything"
            />

            <button type="submit" className="icon">
              <SearchIcon />
            </button>
        </div>

        <div className="shortcuts">
          <div className="docs">
            <u>Docs</u>
          </div>

          <div className="icon notification">
            <NotificationIcon />
          </div>

          <div className="user-data">
            <img src={User} alt="" />

            <div className="name">Adedeji</div>

            <div className="icon">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
