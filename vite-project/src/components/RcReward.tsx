import React, { useRef, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
type Props = {
  isOpen: boolean;
};

import customStyles from "../theme/customStyles.module.css";
import { useOnScreen } from "./customHook";
import RcRewardLoader from "./RcRewardLoader";
import RcRewardSmallHeader from "./RcRewardSmallHeader";
import RcRewardBigHeader from "./RcRewardBigHeader";
import RcRewardContent from "./RcRewardContent";
const RcReward: React.FC<Props> = ({ isOpen }) => {
  const [height, setHeight] = useState(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setHeight(e.currentTarget.scrollTop);
  };
  const ref: any = useRef<HTMLDivElement>();
  const rootMargin = useBreakpointValue({
    base: "-140px",
    sm: "-180px",
    md: "-200px",
    lg: "-200px",
  });
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, rootMargin); //180px

  return (
    <Box
      onScroll={(e) => {
        handleScroll(e);
      }}
      h={isOpen ? "550px" : "0px"}
      w={{ base: "85%", sm: "350px" }}
      sx={styles.rewardBody}
      className={customStyles.rewardBody}
    >
      <RcRewardLoader />
      <RcRewardSmallHeader onScreen={onScreen} />
      <RcRewardBigHeader height={height} refc={ref} />
      <RcRewardContent />
    </Box>
  );
};

export default RcReward;
const styles = {
  rewardBody: {
    transition: "0.4s all ease-in-out",
    background: "white",
    overflow: "scroll",
    position: "fixed",
    zIndex: 300,
    bottom: "100px",
    left: "25px",
    borderRadius: "12px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0 8px 24px",
  },
};
