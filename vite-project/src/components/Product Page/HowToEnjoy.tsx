import React from "react";

import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Pot from "../../assets/images/pot.svg";

import HowToEnjoySwiper from "./HowToEnjoySwiper";

const HowToEnjoy = () => {
  return (
    <>
      {/*Text Info*/}
      <VStack spacing={"20px"} pt={"40px"} mb={"30px"}>
        <Image src={Pot} />
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>How To Enjoy</Heading>
        <Text textAlign={"center"} fontSize={{ md: "lg" }}>
          Our bone broth flavors make it easy to drink daily - or to mix with
          your favorite recipes. Sip as-is or add ingredients to suit your taste
          buds!
        </Text>
      </VStack>

      {/*How To Enjoy Swiper*/}
      <HowToEnjoySwiper />
    </>
  );
};

export default HowToEnjoy;
