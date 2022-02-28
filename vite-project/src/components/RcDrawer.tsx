import React from "react";
import { Box } from "@chakra-ui/react";
type Props = {
  isOpen: boolean | undefined;
};
const RcDrawer: React.FC<Props> = ({ children, isOpen }) => {
  return (
    <Box
      sx={styles.drawer}
      h={isOpen ? "100vh" : "0px"}
      display={{ xl: "none" }}
    >
      {children}
    </Box>
  );
};

export default RcDrawer;
const styles = {
  drawer: {
    overflow: "hidden",
    zIndex: 1500,
    position: "fixed",
    width: "100%",
    left: 0,

    bg: "brandCream",

    webkitTransition: "all 0.2s ease-in-out",
    transition: "all 0.2s ease-in-out",
  },
};
