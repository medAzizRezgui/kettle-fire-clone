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
const data = [
  "Up to 20% Off",
  "Free shipping for 6+ Cartons",
  "Delivers Monthly",
  "No Commitment",
];
import shop from "../../assets/images/shop.jpg";
import wave from "../../assets/images/wave6.svg";
import wave2 from "../../assets/images/wave7.svg";
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
    <Container variant={"fluid"} bg={{ base: "darkBrown", md: "gray" }}>
      <Container
        variant={"fluid"}
        display={{ md: "flex" }}
        alignItems={{ md: "center" }}
        flexDirection={{ md: "row-reverse" }}
        pb={{ md: "20px" }}
      >
        <Image
          src={shop}
          alt={"shopItem"}
          maxW={{ md: "400px" }}
          borderRadius={{ md: "20px" }}
          m={{ md: "20px" }}
        />
        <Container variant={"responsive"}>
          <VStack spacing={"10px"}>
            <Heading variant={"title"} fontSize={{ base: "2xl", md: "3xl" }}>
              Subscribe and Save
            </Heading>

            {data.map((item, key) => (
              <Text
                key={key}
                fontWeight={"400"}
                textAlign={"center"}
                fontSize={{ base: "md", sm: "xl" }}
              >
                {item}
              </Text>
            ))}
          </VStack>
          <Button variant={"primary"} m={"20px auto"} display={"flex"}>
            Shop Now
          </Button>
        </Container>
        <Image src={waveSrc} alt={"wave"} sx={waveStyle} />
      </Container>
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
