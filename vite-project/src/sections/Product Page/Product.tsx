import React from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import renderStars from "../../components/Home Page/testimonial/TestiStars";
import OrderOptions from "../../components/Product Page/OrderOptions";
import QuantityTabs from "../../components/Product Page/QuantityTabs";
import AddToCartButton from "../../components/Product Page/AddToCartButton";
const Product = () => {
  return (
    <Container variant={"fluid"} mt={"60px"}>
      {/* Product Image*/}
      <Box
        h={"320px"}
        bgPosition={"center"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgImage={`url('https://ucarecdn.com/2fc05d89-17cf-4d37-86ce-c2bae68f1ad5/ChickenBoneBroth16ozMobile.jpg')`}
      />
      {/*  Product Info*/}
      {/*-------------*/}
      <Container variant={"responsive"} px={"30px"}>
        {/*Reviews*/}
        <HStack my={"20px"} spacing={"12px"}>
          <HStack spacing={"1px"}>{renderStars("#aa131d", "20px")}</HStack>
          <Text textDecoration={"underline"} fontWeight={500}>
            7859 Reviews
          </Text>
        </HStack>
        {/*  Product Text*/}
        <VStack align={"left"}>
          <Heading variant={"title"} fontSize={"3xl"} textAlign={"left"}>
            Chicken Bone Broth
          </Heading>
          <Text fontWeight={500}>
            A comforting classic made with organic, free-range chicken that
            soothes with every serving. Easy to heat, easy to sip, easy to feel
            better fast.
          </Text>
        </VStack>

        {/*Ordering Options  */}
        <OrderOptions />
        {/*  Quantity*/}
        <QuantityTabs />
        <AddToCartButton />
      </Container>
    </Container>
  );
};

export default Product;
