import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaRegShareSquare } from "react-icons/fa";
import { BiComment } from "react-icons/bi";

type Props = {
  question?: boolean;
};

const ReviewCTA: React.FC<Props> = ({ question }) => {
  return (
    <HStack
      spacing={question ? "0px" : "20px"}
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
        <Icon
          as={FaRegShareSquare}
          size={"8px"}
          display={question ? "none" : "block"}
        />
        <Text fontSize={"14px"} fontWeight={500}>
          {question ? null : "Share"}
        </Text>
      </HStack>
      <HStack
        cursor={"pointer"}
        color={"#747479"}
        _hover={{ color: "primary" }}
      >
        <Icon as={BiComment} size={"8px"} />
        <Text fontSize={"14px"} fontWeight={500}>
          {question ? "Answers(01) " : "Comments (02)"}
        </Text>
      </HStack>
    </HStack>
  );
};

export default ReviewCTA;
