import React, { useState } from "react";
import "./_star-rating.scss";

export default function StarRatinng() {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(3)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRating(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
