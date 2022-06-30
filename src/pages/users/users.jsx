import React from "react";
import "./_user.scss";
import InAppLayout from "../../layout/inAppLayout";
import { openDropdown } from "../../utils/dropdown";

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

export default function Users() {
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
            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(".more-option-menu-1");
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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

            <TableRow>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>Adedeji@lendsqr.com</td>
              <td>08023456789</td>
              <td>May 15, 2020 10:00 AM</td>
              <td>Inactive</td>
              <td className="more-column">
                <button
                  onClick={() => {
                    openDropdown(1);
                  }}
                >
                  <MoreIcon />
                </button>

                <DropdownMenu className="more-option-menu-1">
                  <DropdownOption>
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
          </TableBody>
        </Table>
      </div>
    </InAppLayout>
  );
}
