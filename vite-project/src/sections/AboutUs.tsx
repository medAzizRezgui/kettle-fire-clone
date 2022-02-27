import React from "react";
import { Button, Container, Image, Stack } from "@chakra-ui/react";

import wave4 from "../assets/images/wave5.svg";

import AboutUsText from "../components/AboutUsText";
import AboutUsImages from "../components/aboutUsImages";
const AboutUs = () => {
  return (
    <Container variant={"fluid"} position={"relative"}>
      <Image src={wave4} alt={"wave"} sx={styles.wave} />
      <Container variant={"fluid"} bg={"darkYellow"} py={"55px"}>
        <Stack
          w={"100%"}
          spacing={"40px"}
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ base: "flex-end", lg: "space-between" }}
          align={{ base: "space-between", lg: "center" }}
        >
          <AboutUsText />
          <AboutUsImages />
        </Stack>
        <Button
          variant={"primary"}
          display={{ base: "flex", lg: "none" }}
          mx={"auto"}
        >
          About us
        </Button>
      </Container>
    </Container>
  );
};

export default AboutUs;
const styles = {
  wave: {
    position: "sticky",
    zIndex: 500,
    background: "brandCream",
  },
};
