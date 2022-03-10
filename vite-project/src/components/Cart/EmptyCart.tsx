import React from "react";
import { Box, Button, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Box
      display={"flex"}
      w={"100%"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack spacing={"15px"}>
        <Icon as={BsCartPlus} color={"primary"} boxSize={"40px"} />
        <Heading fontFamily={"poppins"} fontSize={"2xl"}>
          Your Cart Is Empty
        </Heading>
        <Text fontSize={"md"}>Fill your cart with amazing broth</Text>

        <Link to={"/product"}>
          <Button variant={"primary"}>Shop Now</Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default EmptyCart;
