import React from "react";
import "./_back-button.scss";
import { useNavigate } from "react-router-dom";

//icons
import { ReactComponent as BackIcon } from "../../../assets/icons/arrow-back.svg";

export default function BackButton({ children, to }) {
  const navigate = useNavigate();
  const goBack = () => {
    if (to) {
      navigate(to);
    } else if (window.history.length > 1) {
      navigate(-1);
    }
  };

  return (
    <button className="back-button" onClick={goBack}>
      <div className="icon">
        <BackIcon />
      </div>

      <div>{children}</div>
    </button>
  );
}
