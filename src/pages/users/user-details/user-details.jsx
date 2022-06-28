import React from "react";
import "./_user-details.scss";
import InAppLayout from "../../../layout/inAppLayout";
import OutlinedButton from "../../../components/common/outlined-button/outlined-button";
import BackButton from "../../../components/common/back-button/back-button";

export default function UserDetailsPage() {
  return (
    <InAppLayout>
      <div className="user-details-page">
        <BackButton to="/users">Back to Users</BackButton>

        <div className="page-heading">
          <div>
            <h1 className="page-title">User Details</h1>
          </div>

          <div className="button-row">
            <OutlinedButton className="blacklist-btn">
              Blacklist User
            </OutlinedButton>
            <OutlinedButton>Activate User</OutlinedButton>
          </div>
        </div>
      </div>
    </InAppLayout>
  );
}
