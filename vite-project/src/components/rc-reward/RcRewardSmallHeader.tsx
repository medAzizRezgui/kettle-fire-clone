import React from "react";
import customStyles from "../../theme/customStyles.module.css";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
type Props = {
  onScreen: boolean;
};
const RcRewardSmallHeader: React.FC<Props> = ({ onScreen }) => {
  return (
    <Box
      className={customStyles.smallHeaderAnimation}
      sx={styles.smallHeader}
      zIndex={onScreen ? -500 : 200}
    >
      <Heading p={4}>
        <HStack w={"100%"} align={"center"} spacing={"20px"}>
          <Image
            sx={onScreen ? styles.hidden : styles.visible}
            src={
              "https://api-uploads-cdn.sweettooth.io/panel_header/banner_image/processed/fb80f5e721f9a2a7e589fba02e2022520763e3285013553b36ae3ac561fb90c88cb8353d7dc28408.png"
            }
            maxW={"30px"}
          />
          <Text
            fontFamily={"Poppins"}
            sx={onScreen ? styles.hidden : styles.visible}
            fontSize={"lg"}
          >
            OneNinety Rewards
          </Text>
        </HStack>
      </Heading>
    </Box>
  );
};

export default RcRewardSmallHeader;
const styles = {
  smallHeader: {
    position: "sticky",
    transition: "0.4s opacity ease-in-out",
    top: 0,
    opacity: 0,
    width: "100%",
    height: "60px",
    background:
      "linear-gradient(135.19deg,hsla(355, 80%, 52%, 1),hsla(355, 90%, 37%, 1))",
  },
  hidden: {
    opacity: 0,
    transition: "0.7s opacity",
  },
  visible: {
    opacity: 1,
    transition: "0.7s opacity",
    animation: "reveal 1s forwards",
    color: "white",
  },
};
