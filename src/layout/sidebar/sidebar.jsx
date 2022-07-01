import React from "react";
import "./_sidebar.scss";
import { Link, useLocation } from "react-router-dom";

//icons
import { ReactComponent as SwitchOrganizationIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as DropdownOutlinedIcon } from "../../assets/icons/dropdown-outlined.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as FeesIcon } from "../../assets/icons/badge-percent.svg";
import { ReactComponent as TransactionIcon } from "../../assets/icons/transaction.svg";
import { ReactComponent as LoansIcon } from "../../assets/icons/loan.svg";
import { ReactComponent as DecisionIcon } from "../../assets/icons/handshake.svg";
import { ReactComponent as SavingsIcon } from "../../assets/icons/savings.svg";
import { ReactComponent as LoanRequestIcon } from "../../assets/icons/loan-request.svg";
import { ReactComponent as GuarantorIcon } from "../../assets/icons/guarantors.svg";
import { ReactComponent as TireIcon } from "../../assets/icons/tire.svg";
import { ReactComponent as SettlementIcon } from "../../assets/icons/scroll.svg";
import { ReactComponent as KarmaIcon } from "../../assets/icons/delete-friend.svg";
import { ReactComponent as ServiceAccIcon } from "../../assets/icons/service-account.svg";
import { ReactComponent as WhitelistIcon } from "../../assets/icons/activate-user.svg";
import { ReactComponent as PreferenceIcon } from "../../assets/icons/preference.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/signout.svg";
import { ReactComponent as ServiceIcon } from "../../assets/icons/galaxy.svg";
import { ReactComponent as ReportsIcon } from "../../assets/icons/chart.svg";
import { ReactComponent as LoanProductIcon } from "../../assets/icons/loan-request.svg";
import { ReactComponent as SavingsProductIcon } from "../../assets/icons/bank.svg";
import { ReactComponent as AuditIcon } from "../../assets/icons/clipboard.svg";
import { ReactComponent as PercentIcon } from "../../assets/icons/badge-percent.svg";

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
      <div className="switch-organization">
        <NavComponent
          icon={<SwitchOrganizationIcon />}
          title="Switch Organization"
          dropdown={true}
        />
      </div>

      <NavComponent icon={<HomeIcon />} title="Dashboard" link={`/dashboard`} />

      <div>
        <NavGroup title="Customers">
          {[
            {
              link: "/users",
              title: "Users",
              icon: <UsersIcon />,
            },
            {
              link: "/404",
              title: "Guarantor",
              icon: <GuarantorIcon />,
            },
            {
              link: "/404",
              title: "Loans",
              icon: <LoansIcon />,
            },
            {
              link: "/404",
              title: "Decisions",
              icon: <DecisionIcon />,
            },
            {
              link: "/404",
              title: "Savings",
              icon: <SavingsIcon />,
            },
            {
              link: "/404",
              title: "Loan Request",
              icon: <LoanRequestIcon />,
            },
            {
              link: "/404",
              title: "Whitelist",
              icon: <WhitelistIcon />,
            },
            {
              link: "/404",
              title: "Karma",
              icon: <KarmaIcon />,
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
              link: "/404",
              title: "Organization",
              icon: <SwitchOrganizationIcon />,
            },
            {
              link: "/404",
              title: "Loan Products",
              icon: <LoanProductIcon />,
            },
            {
              link: "/404",
              title: "Savings Products",
              icon: <SavingsProductIcon />,
            },
            {
              link: "/404",
              title: "Fees and Charges",
              icon: <FeesIcon />,
            },
            {
              link: "/404",
              title: "Transactions",
              icon: <TransactionIcon />,
            },
            {
              link: "/404",
              title: "Services",
              icon: <ServiceIcon />,
            },
            {
              link: "/404",
              title: "Service Account",
              icon: <ServiceAccIcon />,
            },
            {
              link: "/404",
              title: "Settlements",
              icon: <SettlementIcon />,
            },
            {
              link: "/404",
              title: "Reports",
              icon: <ReportsIcon />,
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

        <NavGroup title="Settings">
          {[
            {
              link: "/404",
              title: "Preferences",
              icon: <PreferenceIcon />,
            },
            {
              link: "/404",
              title: "Fees and Pricing",
              icon: <PercentIcon />,
            },
            {
              link: "/404",
              title: "Audit Log",
              icon: <AuditIcon />,
            },
            {
              link: "/404",
              title: "Systems Messages",
              icon: <TireIcon />,
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

      <NavComponent icon={<LogoutIcon />} title="Logout" link={`/`} />
    </div>
  );
}
