import React from "react";
import { Circle, Heading, HStack } from "@chakra-ui/react";
import { useCartContext } from "../../context/Cart/CartState";
import { PRICE } from "../../context/Cart/CartState";

type Props = {
  amount: number;
};
const SubSaveHead: React.FC<Props> = ({ amount }) => {
  const { onClose, isOpen } = useCartContext();
  return (
    <HStack onClick={() => onClose()} cursor={"pointer"}>
      <Circle border={"2px solid"} borderColor={"primary"} size={"30px"}>
        <Circle size={"20px"} sx={!isOpen ? styles.active : styles.disabled} />
      </Circle>
      <HStack spacing={"8px"}>
        <Heading
          fontSize={{ base: "18px", sm: "24px" }}
          sx={isOpen ? styles.activeText : styles.disabledText}
        >
          Subscribe
        </Heading>
        <Heading
          color="primary"
          fontSize={{ base: "18px", sm: "24px" }}
          sx={!isOpen ? styles.activeText : styles.disabledText}
        >
          & Save ${((amount * PRICE) / 4).toFixed(2)}
        </Heading>
      </HStack>
    </HStack>
  );
};

export default SubSaveHead;
const styles = {
  active: {
    transition: "all 0.2s ease-in-out",
    bg: "primary",
  },
  disabled: {},
  activeText: {},
  disabledText: {
    color: "#6a6a6b",
    opacity: 0.7,
  },
};
