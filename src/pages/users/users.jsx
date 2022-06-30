import React from "react";
import "./_user.scss";
import InAppLayout from "../../layout/inAppLayout";
import { openDropdown } from "../../utils/dropdown";
import { useNavigate } from "react-router-dom";

//components
import Card from "../../components/common/card/card";
import {
  TableBody,
  TableHeading,
  TableRow,
} from "../../components/table/table-components";
import Table from "../../components/table/table";
import DropdownMenu from "../../components/common/dropdown/dropdown-menu";
import DropdownOption from "../../components/common/dropdown/dropdown-option";
import Select from "../../components/common/select/select";
import Input from "../../components/common/input/input";
import OutlinedButton from "../../components/common/outlined-button/outlined-button";
import FillButton from "../../components/common/button/button";

//Icons
import { ReactComponent as UserIcon } from "./assets/user-card-illustration.svg";
import { ReactComponent as ActiveUserIcon } from "./assets/active-user.svg";
import { ReactComponent as UsersWithLoanIcon } from "./assets/user-with-loan.svg";
import { ReactComponent as UsersWithSavingsIcon } from "./assets/user-with-savings.svg";
import { ReactComponent as MoreIcon } from "../../assets/icons/more.svg";
import { ReactComponent as BlacklistUserIcon } from "../../assets/icons/delete-friend.svg";
import { ReactComponent as ViewDetailsIcon } from "../../assets/icons/view.svg";
import { ReactComponent as ActivateUserIcon } from "../../assets/icons/activate-user.svg";
import { useEffect } from "react";
import axios from "axios";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const gotoUserDetails = (user) => {
    console.log(user);
    navigate(`/users/${user}`, { replace: true });
  };

  return (
    <InAppLayout>
      <div className="page-content user-page">
        <div className="page-heading">
          <h1 className="page-title">Users</h1>
        </div>

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

        <Table className="users-table">
          <TableHeading
            headings={[
              "Organizations",
              "UserName",
              "Email",
              "Phone Number",
              "Date Joined",
              "Status",
            ]}
          />
          <DropdownMenu className="filter-dropdown">
            <Select label="Organizations" />

            <Input label="UserName" />

            <Input label="Email" />

            <Input label="Date Joined" />

            <Input label="Phone Number" />

            <Select label="Status" />

            <div className="button-row">
              <OutlinedButton>Reset</OutlinedButton>
              <FillButton>Filter</FillButton>
            </div>
          </DropdownMenu>

          <TableBody>
            {users.map((user) => {
              return (
                <TableRow key={user?.id}>
                  <td>{user?.orgName}</td>
                  <td>{user?.userName}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phoneNumber}</td>
                  <td>{user?.createdAt}</td>
                  <td>Inactive</td>
                  <td className="more-column">
                    <button
                      onClick={() => {
                        openDropdown(`.more-option-menu-${user?.id}`);
                      }}
                    >
                      <MoreIcon />
                    </button>

                    <DropdownMenu className={`more-option-menu-${user?.id}`}>
                      <DropdownOption
                        onClick={() => {
                          gotoUserDetails(user?.id);
                        }}
                      >
                        <span className="icon">
                          <ViewDetailsIcon />
                        </span>
                        View Details
                      </DropdownOption>

                      <DropdownOption>
                        <span className="icon">
                          <BlacklistUserIcon />
                        </span>{" "}
                        Blacklist User
                      </DropdownOption>

                      <DropdownOption>
                        <span className="icon">
                          <ActivateUserIcon />
                        </span>
                        Activate User
                      </DropdownOption>
                    </DropdownMenu>
                  </td>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </InAppLayout>
  );
}
