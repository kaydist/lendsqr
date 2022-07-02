import React, { useContext } from "react";
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

import { UsersData } from "../../dummy-data";
import { convertToOptions } from "../../utils/form";
import { UsersListContext } from "../../controller/users-context";

export default function Users() {
  const navigate = useNavigate();
  const {
    usersList,
    setUsersList,
    perPage,
    setPerPage,
    currentPage,
    setCurrentPage,
    totalCount,
  } = useContext(UsersListContext);

  const initialFilterState = {
    status: "",
    userName: "",
    email: "",
    phoneNumber: "",
    orgName: "",
    createdAt: "",
  };

  const [filter, setFilter] = React.useState(initialFilterState);

  var indexedDb =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB;

  useEffect(() => {
    const request = indexedDb.open("usersDB", 1);

    request.onerror = function (event) {
      console.log("Error opening database");
    };

    request.onupgradeneeded = function (event) {
      const db = event.target.result;
      const store = db.createObjectStore("usersDB", {
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
      const transaction = db.transaction("usersDB", "readwrite");
      const objectStore = transaction.objectStore("usersDB");

      UsersData.forEach((user) => {
        const saveInStore = objectStore.put(user);
        saveInStore.onerror = function (event) {
          console.log("Error getting data");
        };
      });

      var counter = 0;
      db.transaction("usersDB").objectStore("usersDB").openCursor().onsuccess =
        function (event) {
          var cursor = event.target.result;
          if (cursor) {
            var value = cursor.value;
            setUsersList((prevState) => [...prevState, value]);
            counter++;
            if (counter < perPage) {
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

    const request = indexedDb.open("usersDB", 1);

    request.onerror = function (event) {
      console.log("Error opening database");
    };

    request.onsuccess = function (event) {
      const db = event.target.result;
      const transaction = db.transaction("usersDB", "readwrite");
      const objectStore = transaction.objectStore("usersDB");
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
            setUsersList((prevState) => [...prevState, response]);
          }
          cursor.continue();
        }
      };
    };
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFilter(initialFilterState);
  };

  const allOrg = usersList?.map((user) => user?.orgName);

  const allOrgName = Array.from(new Set(allOrg));

  return (
    <InAppLayout>
      <div className="page-content user-page">
        <div className="page-heading">
          <h1 className="page-title">Users</h1>
        </div>

        <div className="analytics-card-row">
          {[
            { icon: <UserIcon />, label: "usersDB", value: "2,453" },
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

        <Table
          className="users-table"
          tableProps={{
            setPerPage,
            perPage,
            setCurrentPage,
            currentPage,
            totalCount,
          }}
          changeData={(data) => {
            console.log(data);
            // setUsersList(data);
          }}
        >
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
                value={filter?.userName}
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="Email"
                name="email"
                value={filter?.email}
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="Date Joined"
                name="createdAt"
                value={filter?.createdAt}
              />

              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                label="Phone Number"
                name="phoneNumber"
                value={filter?.phoneNumber}
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
                <OutlinedButton
                  onClick={(e) => {
                    handleReset(e);
                  }}
                >
                  Reset
                </OutlinedButton>

                <FillButton type="submit">Filter</FillButton>
              </div>
            </form>
          </DropdownMenu>

          <TableBody>
            {usersList
              .filter((user, idx) => idx < perPage)
              .map((user) => {
                return (
                  <TableRow key={user?.id}>
                    <td className="org-col">{user?.orgName}</td>
                    <td className="name-col">{user?.userName}</td>
                    <td className="email-col">{user?.email}</td>
                    <td className="phone-col">{user?.phoneNumber}</td>
                    <td className="created-col">{user?.createdAt}</td>
                    <td className="status-col">
                      <span
                        className={`status-label ${
                          user?.status === "active"
                            ? "active"
                            : user?.status === "inactive"
                            ? "inactive"
                            : user?.status === "blacklisted"
                            ? "blacklisted"
                            : user?.status === "pending"
                            ? "pending"
                            : ``
                        }`}
                      >
                        {user?.status}
                      </span>
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
