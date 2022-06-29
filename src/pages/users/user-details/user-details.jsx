import React from "react";
import "./_user-details.scss";
import InAppLayout from "../../../layout/inAppLayout";

//components
import OutlinedButton from "../../../components/common/outlined-button/outlined-button";
import BackButton from "../../../components/common/back-button/back-button";
import Card from "../../../components/common/card/card";
import StarRating from "../../../components/common/star-rating/star-rating";

//icons
import { ReactComponent as DefaultAvater } from "../../../assets/icons/user.svg";

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

        <Card>
          <div className="basic-info">
            <div className="user-info">
              <div className="avater">
                <DefaultAvater />
              </div>

              <div className="name">
                <h2>Grace Effiom</h2>
                <p>LSQFf587g90</p>
              </div>
            </div>

            <div className="tier">
              <p>User’s Tier</p>
              <StarRating rating={2} />
            </div>

            <div className="financial-info">
              <h2>{`\u20A6`}200,000.00</h2>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
        </Card>
      </div>
    </InAppLayout>
  );
}
