import { Circle, Icon } from "@chakra-ui/react";
import { ImArrowUp2 } from "react-icons/im";
import React from "react";

function ScrollTopSmoothBtn() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [show, setShow] = React.useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1900 ||
      document.documentElement.scrollTop > 1900
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <Circle
      display={show ? "flex" : "none"}
      bg={"primary"}
      size={"50px"}
      onClick={() => scroll()}
      position={"fixed"}
      right={"25px"}
      bottom={"25px"}
      zIndex={8000}
    >
      <Icon
        transition="all 0.5s ease-in-out"
        boxSize={"20px"}
        cursor={"pointer"}
        as={ImArrowUp2}
        color={"white"}
      />
    </Circle>
  );
}
export default ScrollTopSmoothBtn;
