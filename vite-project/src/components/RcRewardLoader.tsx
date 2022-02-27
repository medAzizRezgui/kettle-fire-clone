import React from "react";
import { Box, Spinner } from "@chakra-ui/react";

const RcRewardLoader = () => {
  return (
    <Box
      sx={styles.loader}
      bgImage={"url('/src/assets/images/rewardBg.svg')"}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <Spinner color="red.500" />
    </Box>
  );
};

export default RcRewardLoader;
const styles = {
  loader: {
    display: "flex",
    transition: "background 0.2s ease-in-out",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    boxShadow: "rgba(149, 157, 165, 0.2) 0 8px 24px",
    top: 0,
    width: "100%",
    height: "100%",
    animation: "comeNgo 0.5s forwards",
  },
};
