import React from "react";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

const ProductPropList = () => {
  return (
    <List spacing={3}>
      <ListItem
        fontSize={"16px"}
        fontWeight={500}
        display={"flex"}
        alignItems={"center"}
      >
        <ListIcon as={HiCheckCircle} color="brown" boxSize={"24px"} />
        We carefully source the highest quality ingredients
      </ListItem>
      <ListItem
        fontSize={"md"}
        fontWeight={500}
        display={"flex"}
        alignItems={"center"}
      >
        <ListIcon as={HiCheckCircle} color="brown" boxSize={"24px"} />
        We partner with farms that reflect our core values
      </ListItem>
      <ListItem
        fontSize={"md"}
        fontWeight={500}
        display={"flex"}
        alignItems={"center"}
      >
        <ListIcon as={HiCheckCircle} color="brown" boxSize={"24px"} />
        We slow simmer our bones at the perfect temperatures for maximum flavor
        and nutrition
      </ListItem>
    </List>
  );
};

export default ProductPropList;
