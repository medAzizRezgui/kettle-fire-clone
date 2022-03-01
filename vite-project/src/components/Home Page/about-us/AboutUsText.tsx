import React from "react";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUsText = () => {
  return (
    <VStack
      maxW={{ lg: "30%" }}
      spacing={{ base: "20px", xl: "35px" }}
      px={{ base: "20px", md: "0px" }}
    >
      <Heading
        variant={"title"}
        fontSize={{ base: "2xl", md: "3xl", xl: "4xl" }}
        px={{ base: 2, sm: 4 }}
      >
        At Kettle & Fire, we're not just making good food.
      </Heading>
      <Text
        textAlign={"center"}
        fontSize={{ base: "md", md: "17px" }}
        px={{ base: 2, sm: 6 }}
        fontWeight={"400"}
      >
        We're making it our mission to improve the way we eat, starting from the
        ground up
      </Text>
      <Button
        variant={"primary"}
        display={{ base: "none", lg: "flex" }}
        mx={"auto"}
        my={"6"}
      >
        About us
      </Button>
    </VStack>
  );
};

export default AboutUsText;
