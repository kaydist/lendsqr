import React from "react";

import Input from "../../components/common/input";

//icons
import User from "../../assets/brand/user.png";
import { ReactComponent as Logo } from "../../assets/brand/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="logo-container">
        <div className="logo">
          <Logo />
        </div>
      </div>

      <div className="topbar-content">
        <div className="input-field search">
          <div className="input-container">
            <Input
              type="text"
              name="search"
              placeholder="Search for anything"
            />

            <button type="submit" className="icon">
              <SearchIcon />
            </button>
          </div>
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
            <div>Adedeji</div>
            <div className="icon">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
