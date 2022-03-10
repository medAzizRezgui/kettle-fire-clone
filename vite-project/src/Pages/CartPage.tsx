import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/Cart/CartState";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";

const CartPage = () => {
  const { items } = useCartContext();

  console.log(items);

  return (
    <Container variant={"fluid"} bg={"brandCream"} h={"100vh"}>
      <Container variant={"responsive"}>
        <Link to={"/product"}>
          <Text>Back</Text>
        </Link>
        {/*empty cart*/}
        {items && items.length === 0 ? <EmptyCart /> : null}
        {/*Cart Items*/}
        {items &&
          items.map((item, i) => (
            <CartItem
              key={i}
              id={item.id}
              amount={item.amount}
              price={item.price}
              name={item.name}
            />
          ))}
      </Container>
    </Container>
  );
};

export default CartPage;
