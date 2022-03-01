import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
type Props = {
  text: string;
  img: any;
};
const Benefit: React.FC<Props> = ({ img, text }) => {
  return (
    <Stack
      direction={{ base: "row", xl: "column" }}
      align={"center"}
      justify={"center"}
    >
      <Image src={img} alt={"none"} width={{ base: "60px", xl: "120px" }} />
      <Text
        fontWeight={"600"}
        fontSize={{ base: "sm", sm: "lg" }}
        px={{ xl: "20px" }}
        textAlign={{ xl: "center" }}
      >
        {text}
      </Text>
    </Stack>
  );
};

export default Benefit;
