import React from "react";
import UserBadge from "./UserBadge";
import ReviewUsecase from "./ReviewUsecase";
import ReviewText from "./ReviewText";
import ReviewCTA from "./ReviewCTA";
type Props = {
  question?: boolean;
};

const ReviewItem: React.FC<Props> = ({ question }) => {
  return (
    <>
      <UserBadge question={question} />
      <ReviewUsecase question={question} />
      <ReviewText
        question={question}
        text={
          "  I use this product for both sipping and cooking certain dishes. The\n" +
          "        broth is bland and gives you the opportunity to add your favorite spices\n" +
          "        to beef up your dish. I love Kettle and Fire and always try to have\n" +
          "        extra on hand."
        }
      />
      <ReviewCTA question={question} />
    </>
  );
};

export default ReviewItem;
