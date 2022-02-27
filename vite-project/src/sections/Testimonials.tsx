import React from "react";
import TestimonialItem from "../components/testimonial/TestimonialItem";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
const data = [
  {
    user: "Donna B",
    text: "“This a fantastic bone broth. It tastes great when making soup, stews, gravy... really anything.”",
  },
  {
    user: "Steph D",
    text: "“I use the bone broth in multiple recipes. It gives a richness everyone notices.”",
  },
  {
    user: "Paula L",
    text: "Just after 2 days I feel that I have more energy. The lower sodium is best for me. I love this product of Kettle & Fire.",
  },
  {
    user: "Marie P",
    text: "“I love it and use it to cook with. Great for soups, stirs fries and just as a drink.”",
  },
];
const Testimonials = () => {
  const slidePerView = useBreakpointValue({ base: 1, md: 2 });
  return (
    <Container variant={"responsive"} my={"40px"}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <TestimonialItem text={item.text} user={item.user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
