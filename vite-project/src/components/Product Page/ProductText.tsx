import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

const ProductText = () => {
  return (
    <VStack align={"left"}>
      <Heading variant={"title"} fontSize={"3xl"} textAlign={"left"}>
        Chicken Bone Broth
      </Heading>
      <Text fontWeight={500}>
        A comforting classic made with organic, free-range chicken that soothes
        with every serving. Easy to heat, easy to sip, easy to feel better fast.
      </Text>
    </VStack>
  );
};

export default ProductText;
