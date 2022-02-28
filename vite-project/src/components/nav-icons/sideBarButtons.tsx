import React from "react";
import { Icon } from "@chakra-ui/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
type Props = {
  isOpen: boolean;
  onToggle: () => void;
  iconSize: string | undefined;
};
const SideBarButtons: React.FC<Props> = ({ iconSize, onToggle, isOpen }) => {
  return (
    <>
      {!isOpen ? (
        <Icon
          as={HiOutlineMenu}
          onClick={onToggle}
          boxSize={iconSize}
          className={"icon-open"}
          display={{ base: "block", xl: "none" }}
        />
      ) : (
        <Icon
          as={HiOutlineX}
          onClick={onToggle}
          boxSize={iconSize}
          className={"icon-close"}
          display={{ base: "block", xl: "none" }}
        />
      )}
    </>
  );
};

export default SideBarButtons;
