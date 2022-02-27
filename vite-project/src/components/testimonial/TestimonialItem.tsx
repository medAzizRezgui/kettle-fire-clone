import React from "react";
import { Heading, VStack, HStack, Text } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
import renderStars from "./TestiStars";

type Props = {
  text: string;
  user: string;
};

const TestimonialItem: React.FC<Props> = ({ text, user }) => {
  return (
    <VStack spacing={"15px"} mb={"30px"}>
      <HStack spacing={"1px"} mb={"20px"}>
        {renderStars}
      </HStack>
      <Heading
        variant={"title"}
        fontSize={{ base: "xl", sm: "2xl" }}
        px={{ base: 2, md: 6 }}
        lineHeight={"1.2"}
      >
        {text}
      </Heading>
      <Text fontWeight={"500"}> - {user} </Text>
      <HStack>
        <MdVerified color={"green"} />
        <Text color={"green"} fontWeight={"500"}>
          Verified user
        </Text>
      </HStack>
    </VStack>
  );
};

export default TestimonialItem;
