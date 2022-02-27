import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import money from "../../assets/images/fixed-amount.svg";
const RcRewardContent3 = () => {
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
          Give $10, Get $10 For Referring Friends
        </Text>
        <Text fontSize={"13px"} textAlign={"center"} px={"10px"}>
          Want to share bone broth with someone you love? Give your friends a
          coupon and claim your own when they make a purchase.
        </Text>

        <HStack align={"center"} w={"90%"} spacing={"10px"}>
          <Image src={money} />
          <VStack align={"starts"}>
            <Text fontSize={"12px"} fontWeight={500}>
              You get
            </Text>
            <Text fontSize={"12px"} fontWeight={500}>
              $10 off coupon
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default RcRewardContent3;
