import React from "react";
import { Button, HStack, Text, useToast } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";

import { useCartContext } from "../../context/Cart/CartState";
import { PRICE } from "../../context/Cart/CartState";

type Props = {
  amount: number;
  productName: string;
};

const AddToCartButton: React.FC<Props> = ({ amount, productName }) => {
  const { addItemToCart, isOpen } = useCartContext();

  const newPrice = isOpen ? PRICE : Number((PRICE - PRICE / 4).toFixed(2));

  const item = {
    name: productName,
    amount: amount,
    id: 1,
    price: newPrice,
  };
  const toast = useToast();
  const handleItemAdd = () => {
    addItemToCart(item);
    toast({
      title: "Item Added Successfully ",
      description: "Please check your Shopping Cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button sx={styles.cartBtn} onClick={() => handleItemAdd()}>
        <HStack justify={"center"} align={"center"}>
          {isOpen ? (
            <Text fontSize={{ base: "16px", sm: "16px" }}>
              $ {newPrice * amount}
            </Text>
          ) : (
            <>
              <Text fontSize={{ base: "12px", sm: "16px" }}>
                ${newPrice * amount}
              </Text>
              <Text
                textDecoration={"line-through"}
                opacity={0.4}
                fontSize={{ base: "12px", sm: "16px" }}
              >
                {" "}
                ${PRICE * amount}
              </Text>
            </>
          )}
          <Text fontWeight="300" opacity={0.8}>
            |
          </Text>
          <Text fontSize={{ base: "12px", sm: "16px" }}>ADD TO CART </Text>
        </HStack>
      </Button>
    </>
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
