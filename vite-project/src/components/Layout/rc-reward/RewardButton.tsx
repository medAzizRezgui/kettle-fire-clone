import React from "react";
import { Circle, Icon } from "@chakra-ui/react";
import CustomStyles from "../../../theme/customStyles.module.css";
import { AiFillGift } from "react-icons/ai";
type Props = {
  onOpen: (state: boolean) => void;
  isOpen: boolean;
};

const RewardButton: React.FC<Props> = ({ onOpen, isOpen }) => {
  return (
    <Circle
      cursor={"pointer"}
      size={"50px"}
      bg={"primary"}
      sx={styles.button}
      onClick={() => onOpen(!isOpen)}
    >
      <Icon
        as={AiFillGift}
        boxSize={"24px"}
        color={"white"}
        className={
          isOpen ? CustomStyles.animReward : CustomStyles.animRewardRev
        }
      />
    </Circle>
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
