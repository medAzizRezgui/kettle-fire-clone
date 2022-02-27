import React from "react";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";

const AboutUsText = () => {
  return (
    <VStack
      maxW={{ lg: "30%" }}
      spacing={"20px"}
      px={{ base: "20px", md: "0px" }}
    >
      <Heading variant={"title"} fontSize={"3xl"}>
        At Kettle & Fire, we're not just making good food.
      </Heading>
      <Text textAlign={"center"} fontSize={"17px"} px={"6"} fontWeight={"500"}>
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