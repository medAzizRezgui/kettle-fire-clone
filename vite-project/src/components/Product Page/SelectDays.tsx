import React from "react";
import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
const SelectDays = () => {
  return (
    <HStack>
      <Text
        fontSize={"12px"}
        color={"#484a4d"}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Deliver Every
      </Text>
      {/*   Select Days Menu*/}
      <HStack sx={styles.selectBody}>
        <InputGroup sx={styles.selectMenu}>
          <InputLeftElement
            children={<Icon as={HiChevronDown} color={"white"} />}
          />
          <Input as={"select"} sx={styles.innerInput}>
            <Box as="option" bg={"white"} color={"brandDark"}>
              30 Days
            </Box>
            <Box as="option" bg={"white"} color={"brandDark"}>
              60 Days
            </Box>{" "}
            <Box as="option" bg={"white"} color={"brandDark"}>
              90 Days
            </Box>
          </Input>
        </InputGroup>
      </HStack>
    </HStack>
  );
};

export default SelectDays;
const styles = {
  innerInput: {
    borderRadius: "25px",
    bg: "brandDark",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  },
  selectBody: {
    borderRadius: "25px",
  },

  selectMenu: {
    m: 0,
    border: 0,
    display: "flex",

    alignItems: "center",
    color: "white",
    textAlign: "center",
    transition: "0.1s all ease-in-out",
  },
};
