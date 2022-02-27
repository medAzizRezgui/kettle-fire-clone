import React from "react";
import { Container, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Recipe from "../components/Recipe";
import img1 from "../assets/images/recipe1.jpg";
import img3 from "../assets/images/recipe2.jpg";
import img2 from "../assets/images/recipe3.jpg";

const data = [
  {
    image: img1,
    text: "Stuffed Bell Peppers",
    bg: "#AA131DCC",
    color: "primary",
  },
  {
    image: img2,
    text: " Lemongrass Ginger Bone Broth Ramen",
    bg: "rgba(5,108,20,0.8)",
    color: "#056C14FF",
  },
  {
    image: img3,
    text: "Tomato Basil Soup",
    bg: "rgba(154,76,27,0.8)",
    color: "rgb(154,76,27)",
  },
];

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
