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

import { users } from "../../dummy-data";

export default function Users() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = React.useState([]);

  useEffect(() => {
    const indexedDb =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;

    const request = indexedDb.open("users", 1);

    request.onerror = function (event) {
      console.log("Error opening database");
    };

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      const store = db.createObjectStore("users", {
        keyPath: "id",
      });
      store.createIndex(
        "all_users",
        [
          "id",
          "orgName",
          "userName",
          "phoneNumber",
          "email",
          "createdAt",
          "status",
        ],
        { unique: true }
      );
    };

    request.onsuccess = function (event) {
      const db = event.target.result;
      const transaction = db.transaction("users", "readwrite");
      const objectStore = transaction.objectStore("users");

      users.forEach((user) => {
        const request = objectStore.put(user);
        request.onerror = function (event) {
          console.log("Error getting data");
        };
      });

      var counter = 0;
      var limit = 10;
      db.transaction("users").objectStore("users").openCursor().onsuccess =
        function (event) {
          var cursor = event.target.result;
          if (cursor) {
            var value = cursor.value;
            setUsersList((prevState) => [...prevState, value]);
            counter++;
            if (counter < limit) {
              cursor.continue();
            }
          }
        };

      transaction.oncomplete = function (event) {
        db.close();
      };
    };
  }, []);

  const gotoUserDetails = (user) => {
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
            {usersList
              .filter((user, idx) => idx < 10)
              .map((user) => {
                return (
                  <TableRow key={user?.id}>
                    <td className="org-col">{user?.orgName}</td>
                    <td className="name-col">{user?.userName}</td>
                    <td className="email-col">{user?.email}</td>
                    <td className="phone-col">{user?.phoneNumber}</td>
                    <td className="created-col">{user?.createdAt}</td>
                    <td className="status-col">
                      <span>{user?.status}</span>
                    </td>
                    <td className="actions-col">
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
