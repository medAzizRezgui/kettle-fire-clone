import React from "react";
import {
  Heading,
  HStack,
  Icon,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

import TextWithIcon from "./nav-icons/textWithIcon";
import "../theme/fonts.css";
import Logo from "../assets/images/logo-kf.svg";
import {
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import SideBarButtons from "./nav-icons/sideBarButtons";
type Props = {
  onToggle: () => void;
  isOpen: boolean;
};
const NavText = (Text: string) => <Heading sx={styles.navText}>{Text}</Heading>;
const NavIcons: React.FC<Props> = ({ onToggle, isOpen }) => {
  const iconSize = useBreakpointValue({ base: "24px", xl: "28px" });

  return (
    <>
      <HStack justify="space-between" h={"70px"}>
        {/*Search And Bars Icon*/}
        <HStack align={"center"} spacing={{ base: "4", sm: "5", md: "7" }}>
          <TextWithIcon text={"Shop"} styles={styles} />
          <HStack display={{ base: "none", xl: "flex" }} spacing={"20px"}>
            {NavText("Bundles")}
            {NavText("Subscribe & Save")}
          </HStack>
          <SideBarButtons
            onToggle={onToggle}
            isOpen={isOpen}
            iconSize={iconSize}
          />
          <Icon
            as={HiOutlineSearch}
            boxSize={iconSize}
            display={{ base: "block", xl: "none" }}
          />
        </HStack>
        {/*Logo*/}
        <HStack align={"center"} display={{ xl: "none" }}>
          <span className="wfx-icon-kf-logo">{""}</span>
        </HStack>
        <Image
          src={Logo}
          alt={"logo"}
          maxW={"170px"}
          display={{ base: "none", xl: "block" }}
        />
        {/*User and Cart Icon*/}
        <HStack align={"center"} spacing={{ base: "4", sm: "5", md: "7" }}>
          <HStack display={{ base: "none", xl: "flex" }} spacing={"20px"}>
            <TextWithIcon text={"Learn"} styles={styles} />
            {NavText("About Us")}
          </HStack>
          <Icon
            as={HiOutlineSearch}
            boxSize={iconSize}
            display={{ base: "none", xl: "block" }}
          />
          <HiOutlineUser size={iconSize} />
          <HiOutlineShoppingCart size={iconSize} />
        </HStack>
      </HStack>
    </>
  );
};

export default NavIcons;
const styles = {
  navText: {
    fontWeight: 600,
    fontSize: "md",
  },
};
