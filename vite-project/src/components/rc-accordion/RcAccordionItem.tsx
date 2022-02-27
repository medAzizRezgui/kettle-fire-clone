import React from "react";
import { AccordionItem, Heading, HStack } from "@chakra-ui/react";
type Props = {
  Title: string;
};
const RcAccordionItem: React.FC<Props> = ({ Title }) => {
  return (
    <>
      <AccordionItem sx={styles.item}>
        <HStack justify="space-between" w={"100%"}>
          <Heading fontWeight="600" fontSize="xl">
            {Title}
          </Heading>
        </HStack>
      </AccordionItem>
    </>
  );
};

export default RcAccordionItem;
const styles = {
  item: {
    p: 4,
    borderTop: 0,
    borderBottom: "0.5px solid rgba(0,0,0,0.2)",
    cursor: "pointer",
  },
};
