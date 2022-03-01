import React from "react";
import { Circle, Heading, HStack } from "@chakra-ui/react";
type Props = {
  onClose: () => void;
  isOpen: boolean;
  price: number;
};
const SubSaveHead: React.FC<Props> = ({ isOpen, onClose, price }) => {
  return (
    <HStack onClick={() => onClose()} cursor={"pointer"}>
      <Circle border={"2px solid"} borderColor={"primary"} size={"30px"}>
        <Circle size={"20px"} sx={!isOpen ? styles.active : styles.disabled} />
      </Circle>
      <HStack spacing={"8px"}>
        <Heading
          fontSize={"20px"}
          sx={!isOpen ? styles.activeText : styles.disabledText}
        >
          Subscribe
        </Heading>
        <Heading
          color="primary"
          fontSize={"20px"}
          sx={!isOpen ? styles.activeText : styles.disabledText}
        >
          & Save ${(price / 4).toFixed(2)}
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
