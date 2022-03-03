import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaRegShareSquare } from "react-icons/fa";
import { BiComment } from "react-icons/bi";
const ReviewCTA = () => {
  return (
    <HStack
      spacing={"20px"}
      my={"10px"}
      borderBottom={"1px solid"}
      borderColor={"#c7c6c6"}
      pb={"20px"}
    >
      <HStack
        cursor={"pointer"}
        color={"#747479"}
        _hover={{ color: "primary" }}
      >
        <Icon as={FaRegShareSquare} size={"8px"} />
        <Text fontSize={"14px"} fontWeight={500}>
          Share
        </Text>
      </HStack>
      <HStack
        cursor={"pointer"}
        color={"#747479"}
        _hover={{ color: "primary" }}
      >
        <Icon as={BiComment} size={"8px"} />
        <Text fontSize={"14px"} fontWeight={500}>
          Comment (01)
        </Text>
      </HStack>
    </HStack>
  );
};

export default ReviewCTA;
