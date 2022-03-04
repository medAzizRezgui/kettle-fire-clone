import React, { useState } from "react";
import {
  Box,
  Container,
  useDisclosure,
  useBreakpointValue,
  Flex,
  VStack,
} from "@chakra-ui/react";

import OrderOptions from "../../components/Product Page/OrderOptions";
import QuantityTabs from "../../components/Product Page/QuantityTabs";
import AddToCartButton from "../../components/Product Page/AddToCartButton";
import ProductText from "../../components/Product Page/ProductText";
import ProductReviews from "../../components/Product Page/ProductReviews";
import ImageThumbs from "../../components/Product Page/ImageThumbs";
const Product = () => {
  const imgUrl = useBreakpointValue({
    base: "https://ucarecdn.com/2fc05d89-17cf-4d37-86ce-c2bae68f1ad5/ChickenBoneBroth16ozMobile.jpg",
    md: "https://ucarecdn.com/b8234127-73ae-4c5a-861d-904e3e38aaf1/4PackChickenBoneBroth32oz.jpg",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const PRICE = 7.99;

  const [price, setPrice] = useState(PRICE);
  const handleChange = (e: number) => {
    switch (e) {
      case (e = 0):
        return setPrice(PRICE);
      case (e = 1):
        return setPrice(PRICE * 6);
      case (e = 2):
        return setPrice(PRICE * 11);
      case (e = 3):
        return setPrice(PRICE * 16);
      default:
    }
  };
  return (
    <Container variant={"fluid"} my={"60px"}>
      {/* Product Image*/}
      <Flex justifyContent={"end"} direction={{ base: "column", md: "row" }}>
        <Container variant={"responsive"} zIndex={20}>
          <Box
            position={"absolute"}
            top={0}
            left={0}
            h={"320px"}
            w={"100%"}
            bgPosition={"center"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgImage={`url('${imgUrl})`}
          />
          <Box mt={"320px"} w={"100%"} zIndex={10}>
            <ImageThumbs />
          </Box>
        </Container>
        <Container variant={"responsive"} zIndex={20}>
          <VStack align={{ base: "start", md: "center" }}>
            <ProductReviews />
            {/*  Product Text*/}
            <ProductText />
            {/*Ordering Options  */}
            <OrderOptions
              price={price}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
            {/*  Quantity*/}
            <QuantityTabs handleChange={handleChange} />
            {/*Cart Button*/}
            <AddToCartButton price={price} isOpen={isOpen} />
          </VStack>
        </Container>
      </Flex>

      <Container variant={"responsive"} px={"30px"}>
        {/*  Product Info*/}
        {/*-------------*/}
        {/*Grid Images*/}
        {/*Reviews*/}
      </Container>
    </Container>
  );
};

export default Product;
