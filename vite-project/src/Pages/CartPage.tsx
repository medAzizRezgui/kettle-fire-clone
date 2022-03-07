import React from "react";
import Layout from "../sections/Layout/Layout";
import { Container, Heading } from "@chakra-ui/react";
import useCart from "../utils/Hooks/useCart";

const CartPage = () => {
  const { price } = useCart();
  return (
    <Layout>
      <Container variant={"fluid"} mt="60px">
        <Container variant={"responsive"} py={"30px"}>
          <Heading>This is the cart</Heading>
          <Heading>
            {price.map((item) => (
              <h1>{item}</h1>
            ))}
          </Heading>
        </Container>
      </Container>
    </Layout>
  );
};

export default CartPage;
