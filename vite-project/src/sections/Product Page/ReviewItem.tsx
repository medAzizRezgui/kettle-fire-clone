import React from "react";
import UserBadge from "./UserBadge";
import ReviewUsecase from "./ReviewUsecase";
import ReviewText from "./ReviewText";
import ReviewCTA from "./ReviewCTA";

const ReviewItem = () => {
  return (
    <>
      <UserBadge />
      <ReviewUsecase />
      <ReviewText />
      <ReviewCTA />
    </>
  );
};

export default ReviewItem;
