import React from "react";
import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
type Props = {
  src: string;
  title: string;
  desc: string;
};
const AlsoLove: React.FC<Props> = ({ src, title, desc }) => {
  return (
    <HStack spacing={"20px"}>
      <Image loading={"lazy"} maxW={"120px"} src={src} borderRadius={"12px"} />
      <VStack align={"start"} spacing={"5px"}>
        <Heading fontSize={"lg"} fontWeight={600}>
          {title}
        </Heading>
        <Text fontSize={"sm"} fontWeight={500}>
          {desc}
        </Text>
        <Button variant={"primary"} px={8} py={2}>
          Shop Now
        </Button>
      </VStack>
    </HStack>
  );
};

export default AlsoLove;
