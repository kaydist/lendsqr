import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as SwitchOrganizationIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as DropdownOutlinedIcon } from "../../assets/icons/dropdown-outlined.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

export default function Sidebar() {
  let location = useLocation();

  const NavComponent = ({ link, icon, title, dropdown }) => {
    return (
      <Link to={`${link ? link : "#"}`}>
        <div
          className={`nav-link ${location.pathname === link ? "active" : ""}`}
        >
          <div className="icon">{icon}</div>

          <div>{title}</div>

          {dropdown ? (
            <div className="dropdown icon">
              <DropdownOutlinedIcon />
            </div>
          ) : null}
        </div>
      </Link>
    );
  };

  const NavGroup = ({ title, children }) => {
    return (
      <div className="nav-link-group">
        <h4>{title}</h4>
        {children}
      </div>
    );
  };

  return (
    <div className="sidebar">
      <NavComponent
        icon={<SwitchOrganizationIcon />}
        title="Switch Organization"
        dropdown={true}
      />

      <NavComponent
        icon={<HomeIcon />}
        title="Dashboard"
        link={`/dashboard`}
      />

      <div>
        <NavGroup title="Customers">
          {[
            {
              link: "/users",
              title: "Users",
              icon: <UsersIcon />,
            },
          ].map((item, idx) => {
            return (
              <NavComponent
                key={idx}
                link={item?.link}
                icon={item?.icon}
                title={item?.title}
              />
            );
          })}
        </NavGroup>

        <NavGroup title="Businesses">
          {[
            {
              link: "/organization",
              title: "Organization",
              icon: <SwitchOrganizationIcon />,
            },
          ].map((item, idx) => {
            return (
              <NavComponent
                key={idx}
                link={item?.link}
                icon={item?.icon}
                title={item?.title}
              />
            );
          })}
        </NavGroup>
      </div>
    </div>
  );
}
