import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import PopWave from "../../assets/images/propWave.svg";
import ProductPropList from "./ProductPropList";

const GirlWithCup = () => {
  return (
    <Container variant={"fluid"} bg={"yellow"}>
      <Image src={PopWave} position={"absolute"} display={{ md: "none" }} />

      <Image
        loading={"lazy"}
        display={{ md: "none" }}
        src={
          "https://cdn.kettleandfire.com/9ce1fb81-a573-498f-b4c7-73011266acb6/kfwomansippingcoffee.jpg"
        }
      />
      <Stack
        direction={{ base: "column", md: "row" }}
        align={"center"}
        justify={"space-between"}
      >
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent={"end"}
          p={0}
          w={"100%"}
          bgPosition={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgImage={`url("https://cdn.kettleandfire.com/9ce1fb81-a573-498f-b4c7-73011266acb6/kfwomansippingcoffee.jpg"
)`}
        >
          <svg
            className="desktop"
            width="77"
            height="559"
            viewBox="0 0 77 559"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.416016 0v.49646C46.5342 52.1643 77 163.62 77 279.5 77 395.412 50.9778 500.997.416016 558.496V559H77V0H.416016Z"
              fill="#FAB944"
            ></path>
          </svg>
        </Box>

        <Container variant={"responsive"} p={"20px"}>
          <VStack spacing={"15px"} my={"20px"}>
            <Heading color={"brandDark"} fontSize={{ base: "2xl", md: "3xl" }}>
              At Kettle & Fire, we're not just making good food.
            </Heading>
            <Text fontWeight={500} fontSize={{ md: "lg" }}>
              We're making it our mission to improve the way we eat, starting
              from the ground up.
            </Text>
            <ProductPropList />
          </VStack>
        </Container>
      </Stack>
    </Container>
  );
};

export default GirlWithCup;
