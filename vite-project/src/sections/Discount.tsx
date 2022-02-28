import React from "react";
import {
  Box,
  Container,
  Heading,
  Input,
  Text,
  Button,
  Stack,
  VStack,
} from "@chakra-ui/react";

const Discount = () => {
  return (
    <Container variant="fluid" bg="yellow" py={"60px"}>
      <Container variant={"responsive"}>
        <Stack
          spacing={"10px"}
          direction={{ base: "column", xl: "row" }}
          align={"center"}
          justify={"space-around"}
        >
          <VStack>
            <Heading sx={styles.title}>
              Take an extra 10% off your first order{" "}
            </Heading>
            <Text sx={styles.subTitle}>
              We’ll also send you delicious recipes, product updates, and more
            </Text>
          </VStack>

          <Box sx={styles.email}>
            <Input type="email" placeholder="Your email" sx={styles.input} />
            <Button sx={styles.promo}>Get promo</Button>
          </Box>
        </Stack>
      </Container>
    </Container>
  );
};

export default Discount;
const styles = {
  title: {
    color: "black",
    textAlign: "center",
    fontSize: "2xl",
  },
  subTitle: {
    textAlign: "center",
  },
  email: {
    display: "flex",
    justifyContent: "space-between",
    align: "center",
    background: "white",
    padding: "5px 20px",
    borderRadius: "8px",
  },
  input: {
    outline: "none",
    border: "none",
    width: "70%",

    pl: "15px",
    _focus: {
      outline: "none",
    },
  },
  promo: {
    bg: "white",
    textDecoration: "underline",
    color: "black",
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    _hover: {
      color: "primary",
      borderBottomColor: "primary",
    },
  },
};
