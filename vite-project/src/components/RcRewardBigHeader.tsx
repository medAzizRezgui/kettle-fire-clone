import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import customStyles from "../theme/customStyles.module.css";
type Props = {
  height: number;
  refc: any;
};
const RcRewardBigHeader: React.FC<Props> = ({ height, refc }) => {
  return (
    <Box
      mt={"-60px"}
      className={customStyles.bigHeaderAnimation}
      sx={styles.bigHeader}
      transform={`translate3d(0px,${-height / 3.5}px,0px)`}
      p={4}
      ref={refc}
    >
      <VStack w={"100%"} align={"start"} spacing={"10px"}>
        <Image
          src={
            "https://api-uploads-cdn.sweettooth.io/panel_header/banner_image/processed/fb80f5e721f9a2a7e589fba02e2022520763e3285013553b36ae3ac561fb90c88cb8353d7dc28408.png"
          }
          maxW={"40px"}
        />
        <Text
          opacity={Math.abs(1 - height / 100)}
          fontFamily={"Poppins"}
          color={"white"}
        >
          Welcome to
        </Text>
        <Text
          opacity={Math.abs(1 - height / 100)}
          fontFamily={"Poppins"}
          fontSize={"xl"}
          fontWeight={500}
          color={"white"}
        >
          OneNinety Rewards
        </Text>
      </VStack>
    </Box>
  );
};

export default RcRewardBigHeader;
const styles = {
  bigHeader: {
    transition: "0.4s opacity ease-in-out",
    width: "100%",
    height: "175px",
    zIndex: 20,
    opacity: 0,
    background:
      "linear-gradient(135.19deg,hsla(355, 80%, 52%, 1),hsla(355, 90%, 37%, 1))",
  },
};
