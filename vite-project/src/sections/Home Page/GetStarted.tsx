import React from "react";
import {
  Container,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../assets/data/getStartedData";

const GetStarted = () => {
  const slides = useBreakpointValue({ base: 1.5, md: 3, lg: 4 });
  return (
    <Container variant={"fluid"}>
      <Heading sx={styles.title}>Get Started with Our Favorites</Heading>
      <Swiper slidesPerView={slides} spaceBetween={0}>
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <Link to="/product">
              <VStack width={"100%"} ml={{ base: "40px", md: "0px" }}>
                <Image src={item.image} alt="item" sx={styles.itemImage} />
                <Text sx={styles.text}>{item.text}</Text>
              </VStack>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default GetStarted;
const styles = {
  text: {
    color: "brandDark",
    fontWeight: 500,
    textDecoration: "underline",
    fontSize: { base: "md", xl: "xl" },
  },
  title: {
    textAlign: "center",
    color: "#000000",
    fontSize: { base: "xl", xl: "3xl" },
    fontWeight: 600,
    mb: "10",
  },
  itemImage: {
    maxWidth: { base: "220px", md: "250px", xl: "270px" },
    transition: "all 0.2s ease-in-out",
    _hover: {
      transform: "scale(1.1)",
    },
  },
};
