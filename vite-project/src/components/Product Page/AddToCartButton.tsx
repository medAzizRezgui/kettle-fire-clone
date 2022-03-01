import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";

const AddToCartButton = () => {
  return (
    <Button sx={styles.cartBtn}>
      <HStack justify={"center"} align={"center"}>
        <Text>$115.02</Text>
        <Text fontWeight="300" opacity={0.8}>
          |
        </Text>
        <Text>ADD TO CART </Text>
      </HStack>
    </Button>
  );
};

export default AddToCartButton;
const styles = {
  cartBtn: {
    bg: "primary",
    w: "100%",
    color: "white",
    letterSpacing: "1px",
    fontWeight: 500,
    lineHeight: 10,
    h: "50px",
    mt: "20px",
    _hover: {
      bg: darken("primary", 5),
    },
  },
};
