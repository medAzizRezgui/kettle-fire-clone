import React from "react";
import {
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import wave from "../assets/images/wave3.svg";

import Benefit from "../components/Benefit";
import { data } from "../data/benefitsData";
const Benefits = () => {
  return (
    <>
      <Container variant={"fluid"} bg={"brandCream"} pb={"50px"}>
        <Image src={wave} alt="wave" h={"100%"} />
        <Container variant={"responsive"}>
          <Heading
            variant={"title"}
            fontSize={{ base: "2xl", md: "4xl" }}
            px={{ base: 2, sm: 4, xl: 64 }}
            my={6}
          >
            We make bone broth convenient, delicious, and nutritious.
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={{ base: "md", md: "xl" }}
            px={{ base: 2, md: 6 }}
            mb={8}
          >
            Why? Because bone broth makes everything better, including you.
          </Text>
          <Stack
            direction={{ base: "column", xl: "row" }}
            spacing={"1px"}
            mb={{ xl: "50px" }}
          >
            {data.map((item, i) => (
              <Benefit key={i} text={item.text} img={item.image} />
            ))}
          </Stack>
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
    marginTop: "25px",
  },
};
