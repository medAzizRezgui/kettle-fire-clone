import React from "react";
import Layout from "../sections/Layout/Layout";
import { Container, Heading, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/Cart/CartState";

const CartPage = () => {
  const { cartItems, handleRemoveFromCart, handleRemoveAllFromCart, isOpen } =
    useCartContext();
  return (
    <Layout>
      <Container variant={"fluid"} mt="60px">
        <Container variant={"responsive"} py={"30px"}>
          <Heading>This is the cart</Heading>
          <Link to={"/product"}>
            <Text>Back</Text>
          </Link>
          {cartItems.map((item, i) => (
            <HStack key={i}>
              <Heading>name : {item.name}</Heading>
              <Text>
                price : $ {(item.amount * (isOpen ? 7.99 : 5.99)).toFixed(2)}
              </Text>
              <Text>amount :{item.amount}</Text>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Delete 1 item
              </button>
              <button onClick={() => handleRemoveAllFromCart(item.id)}>
                Delete all
              </button>
            </HStack>
          ))}
        </Container>
      </Container>
    </Layout>
  );
};

export default CartPage;
