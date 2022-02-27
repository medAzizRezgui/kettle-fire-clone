import React from "react";
import { Box } from "@chakra-ui/react";
type Props = {
  onOpen: (state: boolean) => void;
  isOpen: boolean;
};
const RewardButton: React.FC<Props> = ({ onOpen, isOpen }) => {
  return (
    <Box
      h={"50px"}
      w={"50px"}
      bg={"primary"}
      borderRadius={"full"}
      sx={styles.button}
      onClick={() => onOpen(!isOpen)}
    >
      {""}
    </Box>
  );
};

export default RewardButton;
const styles = {
  button: {
    position: "fixed",
    zIndex: 9999,
    bottom: "25px",
    left: "25px",
  },
};
