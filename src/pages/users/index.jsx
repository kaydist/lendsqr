import React from "react";
import "./_user.scss";
import InAppLayout from "../../layout/inAppLayout";
import Card from "../../components/common/card/card";

//Icons
import { ReactComponent as UserIcon } from "./assets/user-card-illustration.svg";
import { ReactComponent as ActiveUserIcon } from "./assets/active-user.svg";
import { ReactComponent as UsersWithLoanIcon } from "./assets/user-with-loan.svg";
import { ReactComponent as UsersWithSavingsIcon } from "./assets/user-with-savings.svg";

export default function Users() {
  return (
    <InAppLayout>
      <div className="page-content user-page">
        <h1 className="page-title">Users</h1>

        <div className="analytics-card-row">
          {[
            { icon: <UserIcon />, label: "users", value: "2,453" },
            { icon: <ActiveUserIcon />, label: "Active Users", value: "2,453" },
            {
              icon: <UsersWithLoanIcon />,
              label: "Users With Loans",
              value: "12,453",
            },
            {
              icon: <UsersWithSavingsIcon />,
              label: "Users With Savings",
              value: "102,453",
            },
          ].map((card, idx) => {
            return (
              <Card className="analytics-card" key={idx}>
                {card?.icon}
                <div className="label">{card?.label}</div>
                <div className="value">{card?.value}</div>
              </Card>
            );
          })}
        </div>
      </div>
    </InAppLayout>
  );
}
