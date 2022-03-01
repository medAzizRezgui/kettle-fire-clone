import React from "react";
import { Box } from "@chakra-ui/react";
import customStyles from "../../../theme/customStyles.module.css";
import img from "../../../assets/images/rewardBg.svg";
import RcRewardContent1 from "./RcRewardContent-1";
import RcRewardContent2 from "./RcRewardContent-2";
import RcRewardContent3 from "./RcRewardContent-3";
import RcRewardContent4 from "./RcRewardContent-4";

const RcRewardContent = () => {
  return (
    <Box
      p={2}
      sx={styles.content}
      bg={"white"}
      className={customStyles.contentAnimation}
      bgImage={`url('${img}')`}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <RcRewardContent1 />
      <RcRewardContent3 />
      <RcRewardContent2 />
      <RcRewardContent4 />
    </Box>
  );
};

export default RcRewardContent;
const styles = {
  content: {
    position: "absolute",
    zIndex: 20,
    width: "100%",
    opacity: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "0.4s all ease-in-out",
  },
};
