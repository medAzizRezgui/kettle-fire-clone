import React from "react";
import { Container, Heading, Image, HStack, Text } from "@chakra-ui/react";
import question from "../../assets/images/question.svg";
import contact from "../../assets/images/contact.svg";
const NotSure = () => {
  return (
    <Container variant={"fluid"} sx={styles.containerBg} pt={"40px"}>
      <Container variant={"responsive"}>
        <Heading textAlign={"center"} my={"20px"}>
          Still not sure ?
        </Heading>
        <HStack justify={"center"}>
          <Image src={question} />
          <Text
            fontWeight={500}
            textDecoration={"underline"}
            cursor={"pointer"}
            textAlign={"center"}
          >
            See our frequently asked questions!
          </Text>
        </HStack>
        <HStack justify={"center"}>
          <Image src={contact} />
          <Text
            fontWeight={500}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Contact Us
          </Text>
        </HStack>
      </Container>
    </Container>
  );
};

export default NotSure;
const styles = {
  containerBg: {
    background:
      ' url("src/assets/images/propWave2.svg") no-repeat top center,white',
  },
};
