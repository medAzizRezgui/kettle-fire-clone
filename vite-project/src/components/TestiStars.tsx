import { AiFillStar } from "react-icons/ai";
let stars: JSX.Element[] = [];
const renderStars = () => {
  for (let i = 0; i < 5; i++) {
    stars[i] = <AiFillStar key={i} color={"orange"} size={"24px"} />;
  }
  return stars;
};

export default renderStars();
