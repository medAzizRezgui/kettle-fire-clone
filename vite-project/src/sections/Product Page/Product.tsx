import React, { useState } from "react";
import { Box, Container, useDisclosure } from "@chakra-ui/react";

import OrderOptions from "../../components/Product Page/OrderOptions";
import QuantityTabs from "../../components/Product Page/QuantityTabs";
import AddToCartButton from "../../components/Product Page/AddToCartButton";
import ProductText from "../../components/Product Page/ProductText";
import ProductReviews from "../../components/Product Page/ProductReviews";
import ImageThumbs from "../../components/Product Page/ImageThumbs";

const Product = () => {
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
        {/*Grid Images*/}
        <ImageThumbs />
        {/*Reviews*/}
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
      </Container>
    </Container>
  );
};

export default Product;
