import React from "react";
import { Container, Heading, Grid, GridItem, Image } from "@chakra-ui/react";
import { images } from "../data/rcGridData";

const RcGrid = () => {
  return (
    <Container variant={"responsive"} mt={"50px"}>
      <Heading variant={"title"} fontSize={"2xl"} my={"40px"}>
        Kettle & Fire in the Wild
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
        templateRows={{ base: "repeat(2,1fr)", md: "none" }}
        gap={4}
      >
        {images.map((item, i) => (
          <GridItem key={i}>
            <Image src={item} borderRadius={8} loading={"lazy"} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default RcGrid;
