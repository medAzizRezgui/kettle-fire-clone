import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import ReviewStats from "../../components/Product Page/ReviewStats";
import ReviewsBody from "./ReviewsBody";

const Reviews = () => {
  return (
    <Container variant={"fluid"} bg={"brandCream"} pt={"40px"}>
      <Container variant={"responsive"} px={"25px"}>
        <Heading
          textAlign={"center"}
          borderBottom={"1px solid"}
          borderColor={"grey"}
          pb={6}
        >
          Reviews
        </Heading>
        <ReviewStats />
        <ReviewsBody />
      </Container>
    </Container>
  );
};

export default Reviews;
