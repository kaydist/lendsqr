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
import { convertToOptions } from "../../utils/form";

export default function Users() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = React.useState([]);
  const [filter, setFilter] = React.useState({
    status: "",
    userName: "",
    email: "",
    phoneNumber: "",
    orgName: "",
    createdAt: "",
  });

  const indexedDb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;

  var db = null;

  useEffect(() => {
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
      db = event.target.result;
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

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;

    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect = (name, val) => {
    if (val) {
      setFilter((prevState) => ({
        ...prevState,
        [name]: val.value,
      }));
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const request = indexedDb.open("users", 1);

    request.onerror = function (event) {
      console.log("Error opening database");
    };

    request.onsuccess = function (event) {
      db = event.target.result;
      const transaction = db.transaction("users", "readwrite");
      const objectStore = transaction.objectStore("users");
      const cursorRequest = objectStore.openCursor();

      cursorRequest.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          const user = cursor.value;
          if (
            user.userName
              .toLowerCase()
              .includes(filter.userName.toLowerCase()) &&
            user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
            user.phoneNumber
              .toLowerCase()
              .includes(filter.phoneNumber.toLowerCase()) &&
            user.createdAt
              .toLowerCase()
              .includes(filter.createdAt.toLowerCase()) &&
            user.orgName.toLowerCase().includes(filter.orgName.toLowerCase()) &&
            user.status.toLowerCase().includes(filter.status.toLowerCase())
          ) {
            const response = cursor.value;
            console.log(response);
          }
          cursor.continue();
        }
      };
    };
  };

  const allOrg = usersList.map((user) => user.orgName);

  const allOrgName = Array.from(new Set(allOrg));

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
            <form
              onSubmit={(e) => {
                handleFilterSubmit(e);
              }}
            >
              <Select
                onChange={(val) => {
                  handleSelect("orgName", val);
                }}
                label="Organizations"
                name="orgName"
                options={convertToOptions(allOrgName, "orgName")}
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="UserName"
                name="userName"
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="Email"
                name="email"
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="Date Joined"
                name="createdAt"
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="Phone Number"
                name="phoneNumber"
              />

              <Select
                onChange={(val) => {
                  handleSelect("status", val);
                }}
                label="Status"
                name="status"
                options={convertToOptions([
                  "inactive",
                  "blacklisted",
                  "active",
                  "pending",
                ])}
              />

              <div className="button-row">
                <OutlinedButton>Reset</OutlinedButton>
                <FillButton type="submit">Filter</FillButton>
              </div>
            </form>
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
