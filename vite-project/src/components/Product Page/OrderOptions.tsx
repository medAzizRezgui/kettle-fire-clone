import { Box, VStack, useDisclosure } from "@chakra-ui/react";

import SubSaveHead from "./SubSaveHead";
import SelectDays from "./SelectDays";
import FeaturesList from "./FeaturesList";
import OneTimeHead from "./OneTimeHead";

const OrderOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack align={"start"}>
      <VStack align={"start"} spacing={"10px"} my={"20px"}>
        <SubSaveHead onClose={onClose} isOpen={isOpen} />
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
