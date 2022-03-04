import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { darken } from "@chakra-ui/theme-tools";
type Props = {
  question?: boolean;
};
const data = [
  {
    title: "Use case:",
    desc: "Slipping For Wellness",
  },
  {
    title: "Flavor:",
    desc: "Mild and Mellow",
  },
  {
    title: "Time of Day:",
    desc: "Afternoon / Evening",
  },
];
const ReviewUsecase: React.FC<Props> = ({ question }) => {
  return (
    <Box
      display={question ? "none" : "block"}
      sx={styles.useCaseBox}
      px={3}
      py={6}
    >
      <VStack align={"start"}>
        {data.map((item, key) => (
          <HStack key={key} spacing={"10px"}>
            <Text fontSize={"15"} fontWeight={500}>
              {item.title}
            </Text>
            <Text fontSize={"13px"} fontWeight={400} color={"#818181"}>
              {item.desc}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default ReviewUsecase;
const styles = {
  useCaseBox: {
    borderRadius: "12px",
    background: darken("brandCream", 4),
    border: "0.2px solid rgba(0,0,0,0.2)",
  },
};
