import React from "react";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

const RcRewardContent1 = () => {
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
        <Text
          fontFamily={"Poppins"}
          textAlign={"center"}
          fontSize={"sm"}
          fontWeight={600}
        >
          Join our very hot rewards program!
        </Text>
        <Text fontSize={"13px"} textAlign={"center"} px={"10px"}>
          You sip, share, and stick with the bone broth you love.
        </Text>
        <Text fontSize={"13px"} textAlign={"center"}>
          We hook you up with BrothBucks toward future orders and other rad
          benefits.
        </Text>
        <Button
          color={"white"}
          fontSize={"sm"}
          p={4}
          fontWeight={500}
          background={
            "linear-gradient(135.19deg,hsla(355, 80%, 52%, 1),hsla(355, 90%, 37%, 1))"
          }
        >
          Get Started
        </Button>
        <HStack>
          <Text fontSize={"12px"} fontWeight={500}>
            Already have an account?
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={500}
            color={"#D21828"}
            textDecoration={"underline"}
          >
            Sign in
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default RcRewardContent1;
