import React from "react";
import RcAccordionItemEx from "./RcAccordionItemEx";
import { Accordion, Text } from "@chakra-ui/react";
import RcAccordionItem from "./RcAccordionItem";

const RcAccordion = () => {
  return (
    <>
      <Accordion allowMultiple>
        <RcAccordionItemEx Title={"Shop"}>
          <Text>Content</Text>
        </RcAccordionItemEx>
        <RcAccordionItem Title={"Bundles"} />
        <RcAccordionItem Title={"Subscribe & Save"} />
        <RcAccordionItemEx Title={"Learn"}>
          <Text>Learn</Text>
        </RcAccordionItemEx>
        <RcAccordionItem Title={"About Us"} />
      </Accordion>
    </>
  );
};

export default RcAccordion;
