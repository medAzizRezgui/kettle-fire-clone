import React from "react";
import Layout from "../sections/Layout/Layout";
import { Container, Heading, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCounter } from "../context/Cart/CartState";

const CartPage = () => {
  const { cartItems, delItem } = useCounter();
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
              <Text>price : {item.price}</Text>
              <Text>amount :{item.amount}</Text>
              <button onClick={() => delItem(item.id)}>Delete</button>
            </HStack>
          ))}
        </Container>
      </Container>
    </Layout>
  );
};

export default CartPage;
