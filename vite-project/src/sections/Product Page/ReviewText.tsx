import React from "react";
import { Heading, Text } from "@chakra-ui/react";
type Props = {
  question?: boolean;
  text: string;
};

const ReviewText: React.FC<Props> = ({ question, text }) => {
  return (
    <>
      <Heading
        fontSize={"2xl"}
        fontWeight={600}
        mt={"20px"}
        mb={"10px"}
        display={question ? "none" : "block"}
      >
        I use this product for
      </Heading>
      <Text>{text}</Text>
    </>
  );
};

export default ReviewText;
