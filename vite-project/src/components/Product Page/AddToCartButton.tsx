import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";

type Props = {
  price: number;
  isOpen: boolean;
};
const AddToCartButton: React.FC<Props> = ({ price, isOpen }) => {
  return (
    <Button sx={styles.cartBtn}>
      <HStack justify={"center"} align={"center"}>
        {isOpen ? (
          <Text fontSize={{ base: "16px", sm: "16px" }}>$ {price}</Text>
        ) : (
          <>
            <Text fontSize={{ base: "12px", sm: "16px" }}>
              ${(price - price / 4).toFixed(2)}
            </Text>
            <Text
              textDecoration={"line-through"}
              opacity={0.4}
              fontSize={{ base: "12px", sm: "16px" }}
            >
              {" "}
              ${price}
            </Text>
          </>
        )}
        <Text fontWeight="300" opacity={0.8}>
          |
        </Text>
        <Text fontSize={{ base: "12px", sm: "16px" }}>ADD TO CART </Text>
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
