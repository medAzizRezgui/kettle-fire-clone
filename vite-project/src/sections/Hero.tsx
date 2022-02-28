import React, { useState } from "react";
import {
  Button,
  Container,
  Heading,
  Image,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import heroWave from "../assets/images/heroWave.svg";
import heroImg from "../assets/images/heroImage.jpg";
import RewardButton from "../components/rc-reward/RewardButton";
import RcReward from "../components/rc-reward/RcReward";
const Hero = () => {
  const [openReward, setOpenReward] = useState(false);

  return (
    <>
      <RewardButton isOpen={openReward} onOpen={setOpenReward} />
      {openReward && <RcReward isOpen={openReward} />}

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
              <Heading variant={"title"} fontSize={{ xl: "5xl" }}>
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

export default Hero;
