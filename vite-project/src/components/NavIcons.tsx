import React from "react";
import { HStack } from "@chakra-ui/react";
import "../theme/fonts.css";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineX,
} from "react-icons/hi";
type Props = {
  onToggle: () => void;
  isOpen: boolean;
};
const NavIcons: React.FC<Props> = ({ onToggle, isOpen }) => {
  const iconSize = "24px";

  return (
    <>
      <HStack justify="space-between" h={"60px"}>
        {/*Search And Bars Icon*/}
        <HStack align={"center"} spacing={{ base: "4", sm: "5", md: "7" }}>
          {!isOpen ? (
            <HiOutlineMenu
              size={iconSize}
              onClick={onToggle}
              className={"icon-open"}
            />
          ) : (
            <HiOutlineX
              size={iconSize}
              onClick={onToggle}
              className={"icon-close"}
            />
          )}
          <HiOutlineSearch size={iconSize} />
        </HStack>
        {/*Logo*/}
        <HStack align={"center"}>
          <span className="wfx-icon-kf-logo">{""}</span>
        </HStack>
        {/*User and Cart Icon*/}
        <HStack align={"center"} spacing={{ base: "4", sm: "5", md: "7" }}>
          <HiOutlineUser size={iconSize} />
          <HiOutlineShoppingCart size={iconSize} />
        </HStack>
      </HStack>
    </>
  );
};

export default NavIcons;
