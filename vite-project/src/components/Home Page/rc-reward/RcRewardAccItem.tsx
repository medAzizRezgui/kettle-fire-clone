import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
type Props = {
  img: any;
};
const RcRewardAccItem: React.FC<Props> = ({ img, children }) => {
  return (
    <AccordionItem
      py={"5px"}
      borderBottom={"1px"}
      borderBottomColor={"rgba(0,0,0,0.2)"}
      borderTop={"0px"}
    >
      <h2>
        <AccordionButton display={"flex"} justifyContent={"space-between"}>
          <HStack justify={"center"} align={"center"} spacing={"20px"}>
            <Image src={img} />
            {children}
          </HStack>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <Text fontSize={"12px"}>Some content will be added soon...</Text>{" "}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default RcRewardAccItem;
