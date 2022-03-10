import { Box, VStack } from "@chakra-ui/react";

import SubSaveHead from "./SubSaveHead";
import SelectDays from "./SelectDays";
import FeaturesList from "./FeaturesList";
import OneTimeHead from "./OneTimeHead";
import React from "react";
import { useCartContext } from "../../context/Cart/CartState";
type Props = {
  amount: number;
};

const OrderOptions: React.FC<Props> = ({ amount }) => {
  const { isOpen, onOpen } = useCartContext();
  return (
    <VStack align={"start"} w={"100%"}>
      <VStack align={"start"} spacing={"10px"} my={"20px"}>
        <SubSaveHead amount={amount} />
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
