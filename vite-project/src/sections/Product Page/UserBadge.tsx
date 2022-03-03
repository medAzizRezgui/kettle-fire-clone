import { Box, Circle, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import renderStars from "../../components/Home Page/testimonial/TestiStars";
import { MdVerified } from "react-icons/md";
const UserBadge = () => {
  return (
    <>
      <HStack spacing={"10px"} justify={"start"} my={"20px"}>
        {/*User Image*/}
        <Box position={"relative"}>
          <Circle bg={"primary"} size={"45px"}>
            <Text color={"white"} fontWeight={500} fontSize={"xl"}>
              P
            </Text>
          </Circle>
          <Circle
            size={"16px"}
            bg={"white"}
            position={"absolute"}
            bottom={0.1}
            right={0.1}
          >
            <Icon as={MdVerified} color={"green"} />
          </Circle>
        </Box>
        <VStack align={"start"} spacing={"5px"}>
          <HStack align={"center"}>
            <Text fontWeight={500} color={"primary"} fontSize={"sm"}>
              Patricia R.
            </Text>
            <Text color={"#64686e"} fontSize={"10px"} fontWeight={500}>
              Verified Buyer
            </Text>
          </HStack>
          <HStack spacing={0}>{renderStars("#aa131d", "16px")}</HStack>
        </VStack>
      </HStack>
    </>
  );
};

export default UserBadge;
