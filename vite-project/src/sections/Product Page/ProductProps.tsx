import React from "react";
import { Container } from "@chakra-ui/react";

import ProductNutriments from "../../components/Product Page/ProductNutriments";
import HowToEnjoy from "../../components/Product Page/HowToEnjoy";
import Testimonials from "../Home Page/Testimonials";
import GirlWithCup from "../../components/Product Page/GirlWithCup";
const ProductProps = () => {
  return (
    <>
      <Container sx={styles.containerBg} variant={"fluid"}>
        <Container variant={"responsive"}>
          <ProductNutriments />
          <HowToEnjoy />
        </Container>
        <Container variant={"fluid"} bg={"white"}>
          <Testimonials />
        </Container>
        <GirlWithCup />
      </Container>
    </>
  );
};
export default ProductProps;
const styles = {
  containerBg: {
    background:
      ' url("src/assets/images/propWave.svg") no-repeat top center, linear-gradient(180deg, #fbe5c0 11.41%, #fff9ee 85.46%)',
  },
};
