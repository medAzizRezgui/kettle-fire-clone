import React from "react";
import {
  VStack,
  HStack,
  Text,
  Heading,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";

import { data } from "../../assets/data/productNutrimentsData";
const ProductNutriments = () => {
  return (
    <VStack w={"100%"} spacing={"50px"}>
      <HStack justify={"space-around"} w={"100%"}>
        <VStack>
          <Text fontSize={"13px"} fontWeight={600}>
            PROTEIN
          </Text>
          <Heading fontSize={"3xl"}>10g</Heading>
        </VStack>
        <VStack>
          <Text fontSize={"13px"} fontWeight={600}>
            CALORIES
          </Text>
          <Heading fontSize={"3xl"}>45</Heading>
        </VStack>
        <VStack>
          <Text fontSize={"13px"} fontWeight={600}>
            COLLAGEN
          </Text>
          <Heading fontSize={"3xl"}>4g</Heading>
        </VStack>
      </HStack>
      <Wrap justify={"space-around"} spacing={"30px"}>
        {data.map((item) => (
          <WrapItem key={item.text}>
            <VStack>
              <Image src={item.image} />
              <Text fontSize={"12px"} fontWeight={600} textAlign={"center"}>
                {item.text} <br /> {item.subTitle}
              </Text>
            </VStack>
          </WrapItem>
        ))}
      </Wrap>

      <Image
        maxW={"200px"}
        src={
          "https://ucarecdn.com/0b2b0461-4f8e-4b73-8e7d-e2711bbb6085/-/format/auto/-/quality/lighter/-/max_icc_size/10/-/resize/684x/"
        }
      />
    </VStack>
  );
};

export default ProductNutriments;
