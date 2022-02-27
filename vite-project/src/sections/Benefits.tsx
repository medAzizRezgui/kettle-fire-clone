import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import bone from "../assets/images/bone.png";
import gut from "../assets/images/gut.png";
import imm from "../assets/images/imm.png";
import fire from "../assets/images/fire.png";
import weight from "../assets/images/weight.png";
import wave from "../assets/images/wave3.svg";

import Benefit from "../components/Benefit";
const data = [
  {
    image: bone,
    text: "Joint Mobility & Recovery",
  },
  {
    image: gut,
    text: "Digestion & Gut Health",
  },
  {
    image: imm,
    text: "Immune Function",
  },
  {
    image: fire,
    text: "Anti-Inflammatory Responses",
  },
  {
    image: weight,
    text: "  Weight Management",
  },
];
const Benefits = () => {
  return (
    <>
      <Container variant={"fluid"} bg={"brandCream"} pb={"100px"}>
        <Image src={wave} alt="wave" h={"100%"} />
        <Container variant={"responsive"}>
          <Heading variant={"title"} fontSize={"3xl"} px={4} my={6}>
            We make bone broth convenient, delicious, and nutritious.
          </Heading>
          <Text textAlign={"center"} fontSize={"xl"} px={6} mb={8}>
            Why? Because bone broth makes everything better, including you.
          </Text>
          <VStack spacing={"1px"}>
            {data.map((item, i) => (
              <Benefit key={i} text={item.text} img={item.image} />
            ))}
          </VStack>
          <Button variant={"primary"} sx={styles.btn}>
            Shop now
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Benefits;
const styles = {
  btn: {
    display: "flex",
    margin: "0px auto",
    marginTop: "35px",
  },
};
