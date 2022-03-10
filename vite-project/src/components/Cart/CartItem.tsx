import {
  Heading,
  Text,
  HStack,
  VStack,
  Icon,
  Button,
  Image,
} from "@chakra-ui/react";
import cartItemImg from "../../assets/images/cartItemImg.png";
import type { CartItemType } from "../../context/Cart/CartState";
import { useCartContext } from "../../context/Cart/CartState";
import React from "react";
import { BsTrash } from "react-icons/bs";
const CartItem: React.FC<CartItemType> = ({ name, amount, price, id }) => {
  const { isOpen, handleRemoveFromCart, handleRemoveAllFromCart } =
    useCartContext();
  return (
    <HStack w={"100%"}>
      <Image src={cartItemImg} maxW={"60px"} />
      <VStack w={"100%"}>
        <HStack justify={"space-between"} w={"100%"}>
          <Heading fontSize={"md"} fontFamily={"poppins"}>
            {" "}
            {name}
          </Heading>
          <button onClick={() => handleRemoveAllFromCart(id)}>
            <Icon as={BsTrash} />
          </button>
        </HStack>
        <HStack justify={"space-between"} w={"100%"}>
          <HStack spacing={"20px"}>
            <Button
              sx={styles.quantityBtn}
              onClick={() => handleRemoveFromCart(id)}
            >
              +
            </Button>

            <Text>{amount}</Text>
            <Button
              sx={styles.quantityBtn}
              onClick={() => handleRemoveFromCart(id)}
            >
              -
            </Button>
          </HStack>
          <Text>$ {(amount * (isOpen ? 7.99 : 5.99)).toFixed(2)}</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default CartItem;
const styles = {
  quantityBtn: {
    p: 0,
    height: "20px",
    border: "0.1px solid black",
  },
};
