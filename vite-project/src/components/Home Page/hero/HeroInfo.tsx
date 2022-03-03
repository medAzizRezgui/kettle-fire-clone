import React from "react";
import {
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import heroImg from "../../../assets/images/heroImage.jpg";
import heroWave from "../../../assets/images/heroWave.svg";

const HeroInfo = () => {
  return (
    <>
      <Container variant={"fluid"} mt={"60px"} bg={"heroBg"}>
        <Container variant={"responsive"}>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justifyContent={"space-between"}
            spacing={"16px"}
            pt={"10"}
          >
            <VStack spacing={{ base: "20px", xl: "30px" }}>
              <Heading variant={"title"} fontSize={{ base: "3xl", xl: "5xl" }}>
                Better Bone Broth for Better Living
              </Heading>
              <Text textAlign={"center"} fontSize={{ base: "xl", xl: "2xl" }}>
                All-in-one shippable wellness to support health and happiness.
              </Text>
              <Button variant={"primary"}>learn more</Button>
            </VStack>
            <Image
              src={heroImg}
              alt={"hero"}
              loading={"eager"}
              maxW={{ base: "100%", md: "55%", lg: "55%", xl: "60%" }}
            />
          </Stack>
        </Container>
      </Container>
      <Image src={heroWave} alt="wave" h={"100%"} />
    </>
  );
};

export default HeroInfo;
