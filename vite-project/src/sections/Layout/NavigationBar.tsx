import React from "react";
import { Container, useDisclosure } from "@chakra-ui/react";
import NavIcons from "../../components/Layout/nav-icons/NavIcons";
import RcAccordion from "../../components/Home Page/rc-accordion/RcAccordion";
import RcDrawer from "../../components/Layout/RcDrawer";

const NavigationBar = () => {
  const { isOpen, onToggle } = useDisclosure();
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
const styles = {
  absolute: {
    position: "absolute",
    top: "-60px",
    left: 0,
    width: "100%",
    zIndex: 100,
  },
  fixed: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
  },
};
