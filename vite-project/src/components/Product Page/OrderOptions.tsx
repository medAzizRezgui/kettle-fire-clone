import { Box, VStack } from "@chakra-ui/react";

import SubSaveHead from "./SubSaveHead";
import SelectDays from "./SelectDays";
import FeaturesList from "./FeaturesList";
import OneTimeHead from "./OneTimeHead";
type Props = {
  price: number;
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
};
const OrderOptions: React.FC<Props> = ({ price, onClose, isOpen, onOpen }) => {
  return (
    <VStack align={"start"}>
      <VStack align={"start"} spacing={"10px"} my={"20px"}>
        <SubSaveHead onClose={onClose} isOpen={isOpen} price={price} />
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
