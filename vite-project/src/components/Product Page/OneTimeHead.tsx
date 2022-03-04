import React from "react";
import { Circle, Heading, HStack } from "@chakra-ui/react";
type Props = {
  onOpen: () => void;
  isOpen: boolean;
};
const OneTimeHead: React.FC<Props> = ({ onOpen, isOpen }) => {
  return (
    <HStack onClick={() => onOpen()} cursor={"pointer"}>
      <Circle border={"2px solid"} borderColor={"primary"} size={"34px"}>
        <Circle size={"24px"} sx={isOpen ? styles.active : styles.disabled} />
      </Circle>
      <Heading
        fontSize={{ base: "18px", sm: "24px" }}
        sx={isOpen ? styles.activeText : styles.disabledText}
      >
        One-time Order
      </Heading>
    </HStack>
  );
};

export default OneTimeHead;
const styles = {
  active: {
    transition: "all 0.2s ease-in-out",
    bg: "primary",
  },

  activeText: {},
  disabledText: {
    color: "#6a6a6b",
    opacity: 0.7,
  },
  disabled: {},
};
