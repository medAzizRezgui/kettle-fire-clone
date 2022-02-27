import React from "react";
import { Accordion, Box, Text, VStack } from "@chakra-ui/react";
import hand from "../../assets/images/earn-more-points.svg";
import spend from "../../assets/images/spend-your-points.svg";
import RcRewardAccItem from "./RcRewardAccItem";
const RcRewardContent2 = () => {
  return (
    <Box
      width={"90%"}
      bg={"white"}
      m={2}
      py={8}
      px={4}
      borderRadius={"8px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      transform={"translateY(-40px)"}
    >
      <VStack align={"center"} spacing={"20px"}>
        <Text fontFamily={"Poppins"} fontSize={"sm"} fontWeight={600}>
          Earning BrothBucks is easy.
        </Text>
        <Text fontSize={"13px"} textAlign={"center"} px={"10px"}>
          Earn more BrothBucks for different actions, save money on future
          orders, and unlock milestones for awesome rewards!
        </Text>

        <Accordion allowMultiple w={"100%"}>
          <RcRewardAccItem img={hand}>
            <Text fontSize={"14px"}>Ways to spend</Text>
          </RcRewardAccItem>
          <RcRewardAccItem img={spend}>
            <Text fontSize={"14px"}>Ways to redeem</Text>
          </RcRewardAccItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default RcRewardContent2;
