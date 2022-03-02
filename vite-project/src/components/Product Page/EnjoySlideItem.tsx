import React from "react";
import { Heading, Image, VStack } from "@chakra-ui/react";
type Props = {
  src: string;
  isActive: boolean;
  text?: string;
  mb?: string;
};
const EnjoySlideItem: React.FC<Props> = ({ src, mb, isActive, text }) => {
  return (
    <VStack mb={mb}>
      <Image
        loading={"lazy"}
        boxShadow={"md"}
        borderRadius={"12px"}
        opacity={isActive ? 1 : 0.3}
        transition={"0.2s all ease-in-out"}
        src={src}
      />
      <Heading fontSize={"lg"} color={"brandDark"} fontWeight={600}>
        {text}
      </Heading>
    </VStack>
  );
};

export default EnjoySlideItem;
