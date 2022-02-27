import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import bone from "../assets/images/bone.png";
type Props = {
  text: string;
  img: any;
};
const Benefit: React.FC<Props> = ({ img, text }) => {
  return (
    <HStack>
      <Image src={img} alt={"none"} width={"60px"} />
      <Text fontWeight={"600"} fontSize={"md"}>
        {text}
      </Text>
    </HStack>
  );
};

export default Benefit;
