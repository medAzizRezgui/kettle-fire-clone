import React from "react";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import renderStars from "../Home Page/testimonial/TestiStars";
const ReviewStats = () => {
  return (
    <>
      <HStack spacing={"15px"} my={"20px"}>
        <Heading fontSize={"5xl"}>4.9</Heading>
        <VStack align={"start"}>
          <HStack spacing={"2px"}>{renderStars("#aa131d", "16px")}</HStack>
          <Text fontSize={"12px"} fontWeight={600}>
            7073 Reviews, 12 Q&As
          </Text>
        </VStack>
      </HStack>
      <HStack spacing={"20px"} my={"20px"}>
        <Button fontSize={{ base: "14px", sm: "16px" }} variant={"outline"}>
          Write a Question
        </Button>
        <Button fontSize={{ base: "14px", sm: "16px" }} variant={"outline"}>
          Write a Review
        </Button>
      </HStack>
    </>
  );
};

export default ReviewStats;
