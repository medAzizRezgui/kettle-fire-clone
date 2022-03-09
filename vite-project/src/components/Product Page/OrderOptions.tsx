import { Box, VStack } from "@chakra-ui/react";

import SubSaveHead from "./SubSaveHead";
import SelectDays from "./SelectDays";
import FeaturesList from "./FeaturesList";
import OneTimeHead from "./OneTimeHead";
import React from "react";
import { useCounter } from "../../context/Cart/CartState";
type Props = {
  price: number;
};

const OrderOptions: React.FC<Props> = ({ price }) => {
  const { isOpen, onOpen } = useCounter();
  return (
    <VStack align={"start"} w={"100%"}>
      <VStack align={"start"} spacing={"10px"} my={"20px"}>
        <SubSaveHead price={price} />
        {!isOpen && (
          <Box px={"10px"}>
            <VStack spacing={"20px"}>
              <SelectDays />
              <FeaturesList />
            </VStack>
          </Box>
        )}
      </VStack>
      <VStack>
        <OneTimeHead isOpen={isOpen} onOpen={onOpen} />
      </VStack>
    </VStack>
  );
};
export default OrderOptions;
