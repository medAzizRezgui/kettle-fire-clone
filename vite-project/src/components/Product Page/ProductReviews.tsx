import React from "react";
import { HStack, Text } from "@chakra-ui/react";
import renderStars from "../Home Page/testimonial/TestiStars";

const ProductReviews = () => {
  return (
    <HStack my={"20px"} spacing={"12px"}>
      <HStack spacing={"1px"}>{renderStars("#aa131d", "20px")}</HStack>
      <Text textDecoration={"underline"} fontWeight={500}>
        7859 Reviews
      </Text>
    </HStack>
  );
};

export default ProductReviews;
