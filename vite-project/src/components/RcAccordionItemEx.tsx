import React from "react";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  background,
  Heading,
  HStack,
} from "@chakra-ui/react";
type Props = {
  Title: string;
};
const RcAccordionItemEx: React.FC<Props> = ({ Title, children }) => {
  return (
    <>
      <AccordionItem sx={styles.item}>
        <AccordionButton sx={styles.btn}>
          <HStack justify="space-between" w={"100%"}>
            <Heading fontWeight="600" fontSize="xl">
              {Title}
            </Heading>
            <AccordionIcon />
          </HStack>
        </AccordionButton>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default RcAccordionItemEx;
const styles = {
  item: {
    width: "100%",
    borderBottom: "0.5px solid rgba(0,0,0,0.2)",
    p: 4,
  },
  btn: {
    p: "0",
    _focus: {
      outline: "none",
    },
    _hover: {
      background: "brandCream",
    },
    _active: {
      background: "brandCream",
    },
  },
};
