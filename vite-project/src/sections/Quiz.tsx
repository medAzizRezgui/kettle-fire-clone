import React from "react";
import {
  Container,
  Heading,
  VStack,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import girl from "../assets/images/guiz.jpg";
const Quiz = () => {
  return (
    <Container
      variant={"fluid"}
      pb={"20px"}
      display={{ md: "flex" }}
      alignItems={{ md: "center" }}
      bg={{ base: "darkPink", md: "gray" }}
    >
      <Image
        loading={"lazy"}
        src={girl}
        alt={"girl"}
        maxW={{ md: "400px" }}
        borderRadius={{ md: "20px" }}
        m={{ md: "20px" }}
      />
      <Container variant={"responsive"}>
        <VStack spacing={{ base: "15px", md: "25px" }}>
          <Heading variant={"title"} fontSize={"3xl"}>
            Shop by Wellness Goal
          </Heading>
          <Text fontWeight={"400"} textAlign={"center"} fontSize={"lg"}>
            Whether you’re shopping for immunity, gut health, or whatever else -
            we’ve got you covered.
          </Text>
        </VStack>
        <Button variant={"primary"} m={"20px auto"} display={"flex"}>
          Take the quiz
        </Button>
      </Container>
    </Container>
  );
};

export default Quiz;
