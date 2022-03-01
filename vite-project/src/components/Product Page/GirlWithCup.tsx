import React from "react";
import { Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import PopWave from "../../assets/images/propWave.svg";
import ProductPropList from "./ProductPropList";

const GirlWithCup = () => {
  return (
    <Container variant={"fluid"} bg={"yellow"}>
      <Image src={PopWave} position={"absolute"} />
      <Image
        loading={"lazy"}
        src={
          "https://cdn.kettleandfire.com/9ce1fb81-a573-498f-b4c7-73011266acb6/kfwomansippingcoffee.jpg"
        }
      />
      <Container variant={"responsive"} p={"20px"}>
        <VStack spacing={"15px"} my={"20px"}>
          <Heading color={"brandDark"} fontSize={"2xl"}>
            At Kettle & Fire, we're not just making good food.
          </Heading>
          <Text fontWeight={500}>
            We're making it our mission to improve the way we eat, starting from
            the ground up.
          </Text>
          <ProductPropList />
        </VStack>
      </Container>
    </Container>
  );
};

export default GirlWithCup;
