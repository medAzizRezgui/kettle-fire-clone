import React from "react";
import { Box } from "@chakra-ui/react";
import customStyles from "../../theme/customStyles.module.css";
import img from "../../assets/images/rewardBg.svg";

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
      <Box
        width={"90%"}
        h={"250px"}
        bg={"white"}
        m={2}
        borderRadius={"8px"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        transform={"translateY(-40px)"}
      />
      <Box
        width={"90%"}
        h={"250px"}
        bg={"white"}
        m={2}
        borderRadius={"8px"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        transform={"translateY(-40px)"}
      />
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
