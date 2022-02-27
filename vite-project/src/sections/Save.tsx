import React from "react";
import {
  Container,
  Heading,
  VStack,
  Image,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import shop from "../assets/images/shop.jpg";
import wave from "../assets/images/wave6.svg";
import wave2 from "../assets/images/wave7.svg";
const Save = () => {
  const waveStyle = useBreakpointValue({
    base: styles.wave,
    md: styles.waveRes,
  });
  const waveSrc = useBreakpointValue({
    base: wave,
    md: wave2,
  });
  return (
    <Container
      variant={"fluid"}
      bg={{ base: "darkBrown", md: "gray" }}
      display={{ md: "flex" }}
      alignItems={{ md: "center" }}
      flexDirection={{ md: "row-reverse" }}
      pb={{ md: "20px" }}
    >
      <Image
        src={shop}
        alt={"girl"}
        maxW={{ md: "400px" }}
        borderRadius={{ md: "20px" }}
        m={{ md: "20px" }}
      />
      <Container variant={"responsive"}>
        <VStack spacing={"10px"}>
          <Heading variant={"title"} fontSize={"3xl"}>
            Subscribe and Save
          </Heading>
          <Text fontWeight={"400"} textAlign={"center"} fontSize={"lg"}>
            Up to 20% Off
          </Text>
          <Text fontWeight={"400"} textAlign={"center"} fontSize={"lg"}>
            Free shipping for 6+ Cartons
          </Text>
          <Text fontWeight={"400"} textAlign={"center"} fontSize={"lg"}>
            Delivers Monthly
          </Text>
          <Text fontWeight={"400"} textAlign={"center"} fontSize={"lg"}>
            No Commitment
          </Text>
        </VStack>
        <Button variant={"primary"} m={"20px auto"} display={"flex"}>
          Shop Now
        </Button>
      </Container>
      <Image src={waveSrc} alt={"wave"} sx={waveStyle} />
    </Container>
  );
};

export default Save;
const styles = {
  waveRes: {
    display: "none",
  },
  wave: {
    zIndex: 500,
    background: "darkYellow",
  },
};
