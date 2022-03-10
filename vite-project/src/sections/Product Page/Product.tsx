import React, { useState } from "react";
import {
  Box,
  Container,
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

  const [amount, setAmount] = useState(1);
  const handleChange = (e: number) => {
    switch (e) {
      case (e = 0):
        return setAmount(1);
      case (e = 1):
        return setAmount(6);
      case (e = 2):
        return setAmount(12);
      case (e = 3):
        return setAmount(18);
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
            <OrderOptions amount={amount} />
            {/*  Quantity*/}
            <QuantityTabs handleChange={handleChange} />
            {/*Cart Button*/}
            <AddToCartButton
              amount={amount}
              productName={"Chicken Bone Broth"}
            />
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
