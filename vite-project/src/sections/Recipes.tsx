import React from "react";
import { Container, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Recipe from "../components/Recipe";
import { data } from "../data/recipesData";
const Recipes = () => {
  const slides = useBreakpointValue({ base: 1, md: 2 });
  return (
    <Container variant={"fluid"} bg={"darkYellow"} pt={{ md: "50px" }}>
      <Container variant={"responsive"}>
        <Heading variant={"title"} fontSize={"2xl"} mb={"30px"}>
          Mouth-Watering Recipes
        </Heading>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={slides}
          pagination={{ clickable: true }}
          autoplay={true}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Recipe
                color={item.color}
                bg={item.bg}
                text={item.text}
                img={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Recipes;
