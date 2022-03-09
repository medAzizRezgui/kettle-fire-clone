import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";

import { useCartContext } from "../../context/Cart/CartState";

type Props = {
  price: number;

  productName: string;
};

const AddToCartButton: React.FC<Props> = ({ price, productName }) => {
  const { handleAddToCart, isOpen } = useCartContext();

  const CalcFinalPrice = (price: number): number => {
    if (!isOpen) {
      return Number((price - price / 4).toFixed(2));
    }
    return price;
  };
  const CalcAmount = (): number => {
    if (!isOpen) {
      return Math.round(CalcFinalPrice(price) / 5.99);
    }
    return Math.round(CalcFinalPrice(price) / 7.99);
  };
  const item = {
    name: productName,
    amount: CalcAmount(),
    id: 1,
    price: CalcFinalPrice(price),
  };

  return (
    <Button sx={styles.cartBtn} onClick={() => handleAddToCart(item)}>
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
