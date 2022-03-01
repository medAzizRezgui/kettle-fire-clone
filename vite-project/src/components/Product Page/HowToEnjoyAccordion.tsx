import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Heading,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { AiFillPlusCircle } from "react-icons/ai";

const HowToEnjoyAccordion = () => {
  return (
    <Accordion allowToggle={true} my={"20px"}>
      <AccordionItem border={"none"}>
        <AccordionButton _focus={{ outline: "0px", border: "none" }}>
          <HStack justify={"center"} w={"100%"}>
            <Heading textAlign="center" fontSize={"xl"} color={"primary"}>
              View Ingredients
            </Heading>
            <Icon as={AiFillPlusCircle} color={"primary"} boxSize={"24px"} />
          </HStack>
        </AccordionButton>

        <AccordionPanel pb={4}>
          Organic Chicken Bone Broth (water, organic chicken bones, organic
          onions, organic carrots, organic fennel, organic leeks, organic apple
          cider vinegar, organic thyme, organic shiitake mushroom, organic
          tamarind extract, organic bay leaf), Organic Vegetable Broth (organic
          celery, organic green pepper, organic onion, organic carrot, organic
          garlic, organic scallions, organic tomato , organic parsley, organic
          thyme, organic rosemary, organic basil, organic spices), Sea Salt.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default HowToEnjoyAccordion;
