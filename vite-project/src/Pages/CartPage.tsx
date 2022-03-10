import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartItemType, useCartContext } from "../context/Cart/CartState";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";

const CartPage = () => {
  const { items } = useCartContext();

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const calcTotal = (items: CartItemType[]): number => {
    return items.reduce(
      (acc: number, item) => acc + item.price * item.amount,
      0
    );
  };
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
        <h2>Total ${calcTotal(items).toFixed(2)}</h2>
        <h2>Total Amount {getTotalItems(items)}</h2>
      </Container>
    </Container>
  );
};

export default CartPage;
