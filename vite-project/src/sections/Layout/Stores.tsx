import React from "react";
import {
  Container,
  Heading,
  Grid,
  GridItem,
  Image,
  HStack,
} from "@chakra-ui/react";
import { images } from "../../assets/data/storesData";
const Stores = () => {
  return (
    <Container variant={"fluid"} pt={"50px"} py={"70px"} bg={"brandCream"}>
      <Heading
        variant={"title"}
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={"25px"}
      >
        <span style={{ textDecoration: "underline" }}>Find Us</span> in Stores
      </Heading>
      <HStack width={"100%"} align={"center"} justifyContent={"space-around"}>
        <Grid
          templateColumns={{ base: "repeat(2,auto)", md: "repeat(4,1fr)" }}
          templateRows={{ base: "repeat(2,auto)", md: "none" }}
        >
          {images.map((item, i) => (
            <GridItem key={i} sx={styles.gridItem}>
              <Image
                loading={"lazy"}
                w={{ base: "250px", md: "100%" }}
                h={"100px"}
                objectFit="contain"
                src={item}
                maxW={"50%"}
              />
            </GridItem>
          ))}
        </Grid>
      </HStack>
    </Container>
  );
};

export default Stores;
const styles = {
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
