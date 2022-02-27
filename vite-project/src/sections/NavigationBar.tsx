import React from "react";
import { Container, useDisclosure } from "@chakra-ui/react";

import NavIcons from "../components/NavIcons";
import RcAccordion from "../components/RcAccordion";
import RcDrawer from "../components/RcDrawer";

const NavigationBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const styles = {
    absolute: {
      position: "absolute",
      top: "-60px",
      left: 0,
      width: "100%",
      zIndex: 1500,
    },
    fixed: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1500,
    },
  };
  return (
    <Container
      variant={"fluid"}
      bg={"brandCream"}
      p={0}
      sx={isOpen ? styles.fixed : styles.absolute}
    >
      <Container variant={"responsive"}>
        <NavIcons onToggle={onToggle} isOpen={isOpen} />
        <RcDrawer isOpen={isOpen}>
          <RcAccordion />
        </RcDrawer>
      </Container>
    </Container>
  );
};

export default NavigationBar;
