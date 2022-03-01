import React from "react";
import { Tab, Text, VStack } from "@chakra-ui/react";
import { whiten } from "@chakra-ui/theme-tools";

type Props = {
  price: number;
  packs: string;
};
const QuantityTab: React.FC<Props> = ({ price, packs }) => {
  const CustomTab: React.FC = ({ children }) => (
    <Tab
      cursor="pointer"
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      py={"2px"}
      px={"10px"}
      _selected={{
        bg: whiten("primary", 90),
        color: "black",
        borderColor: "primary",
      }}
      _focus={{
        boxShadow: "none",
      }}
    >
      {children}
    </Tab>
  );
  return (
    <CustomTab>
      <VStack spacing={"1px"}>
        <Text fontWeight={600} fontSize={"12px"}>
          {packs}
        </Text>
        <Text fontSize="12px" fontWeight={600}>
          ${price}
        </Text>
        <Text fontSize={"12px"} fontWeight={600}>
          /carton
        </Text>
      </VStack>
    </CustomTab>
  );
};

export default QuantityTab;
