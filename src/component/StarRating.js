import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Rating } from "../redux/action/actions";

const StarRating = ({ rating }) => {
  const starTab = useSelector((state) => state.StarReducer.starTab);
  return (
    <div>
      {starTab.map((star) => (
        <span
          className={star.isColored ? "gold" : "black"}
          onClick={() => Rating(star.id)}
        >
          {star.icon}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
