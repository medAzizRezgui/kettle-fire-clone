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
    <Container variant={"fluid"} bg={{ base: "darkPink", md: "gray" }}>
      <Container
        variant={"responsive"}
        pb={"20px"}
        display={{ md: "flex" }}
        alignItems={{ md: "center" }}
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
            <Heading
              variant={"title"}
              fontSize={{ base: "2xl", md: "3xl" }}
              px={{ base: 2, sm: 4 }}
            >
              Shop by Wellness Goal
            </Heading>
            <Text
              px={{ xl: "100px" }}
              fontWeight={"400"}
              textAlign={"center"}
              fontSize={{ base: "md", sm: "xl" }}
            >
              Whether you’re shopping for immunity, gut health, or whatever else
              - we’ve got you covered.
            </Text>
          </VStack>
          <Button variant={"primary"} m={"20px auto"} display={"flex"}>
            Take the quiz
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Quiz;
