import { AiFillStar } from "react-icons/ai";

let stars: JSX.Element[] = [];
const renderStars = (color: string = "orange", size: string = "24px") => {
  for (let i = 0; i < 5; i++) {
    stars[i] = <AiFillStar key={i} color={color} size={size} />;
  }
  return stars;
};

export default renderStars;
