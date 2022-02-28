import React from "react";
import { Heading, HStack, Icon } from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
type Props = {
  text: string;
  styles: { navText: { fontWeight: number; fontSize: string } };
};
const TextWithIcon: React.FC<Props> = ({ text, styles }) => {
  return (
    <HStack spacing={"2px"} display={{ base: "none", xl: "flex" }}>
      <Heading sx={styles.navText}>{text}</Heading>
      <Icon
        as={HiChevronDown}
        boxSize={"18px"}
        display={{ base: "none", xl: "block" }}
      />
    </HStack>
  );
};

export default TextWithIcon;
