import React from "react";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";
const FeaturesList = () => {
  return (
    <List spacing={3}>
      <ListItem fontSize={"sm"}>
        <ListIcon as={HiCheckCircle} color="green.500" />
        Save up to 20%
      </ListItem>
      <ListItem fontSize={"sm"}>
        <ListIcon as={HiCheckCircle} color="green.500" />
        Free U.S. Shipping for 10+ cartons
      </ListItem>
      <ListItem fontSize={"sm"}>
        <ListIcon as={HiCheckCircle} color="green.500" />
        Early access to new products
      </ListItem>
      <ListItem fontSize={"sm"}>Minimum 2 shipments required</ListItem>
    </List>
  );
};

export default FeaturesList;
