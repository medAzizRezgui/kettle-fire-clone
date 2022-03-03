import React from "react";
import { Accordion, Box, Text, VStack } from "@chakra-ui/react";
import b1 from "../../../assets/images/vip-tier-1.svg";
import b2 from "../../../assets/images/vip-tier-2.svg";
import b3 from "../../../assets/images/vip-tier-3.svg";
import RcRewardAccItem from "./RcRewardAccItem";
const RcRewardContent4 = () => {
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
          VIP
        </Text>
        <Text fontSize={"13px"} textAlign={"center"} px={"10px"}>
          Your all access pass to exclusive rewards. Reach higher tiers for more
          exclusive perks.
        </Text>

        <Accordion allowMultiple w={"100%"}>
          <RcRewardAccItem img={b1}>
            <VStack align={"start"} spacing={"0px"} w={"100%"}>
              <Text fontSize={"13px"}>Getting Warm-Silver</Text>
              <Text fontSize={"12px"}>Spend $0</Text>
            </VStack>
          </RcRewardAccItem>
          <RcRewardAccItem img={b2}>
            <VStack align={"start"} spacing={"0px"}>
              <Text fontSize={"14px"}>Firing Up-Gold</Text>
              <Text fontSize={"12px"}>Spend $300</Text>
            </VStack>
          </RcRewardAccItem>
          <RcRewardAccItem img={b3}>
            <VStack align={"start"} spacing={"0px"}>
              <Text fontSize={"14px"}>On Fire! Platinum</Text>
              <Text fontSize={"12px"}>Spend $600</Text>
            </VStack>
          </RcRewardAccItem>
        </Accordion>
      </VStack>
    </Box>
  );
};

export default RcRewardContent4;
