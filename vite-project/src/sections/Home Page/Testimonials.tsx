import React from "react";
import TestimonialItem from "../../components/Home Page/testimonial/TestimonialItem";
import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { data } from "../../assets/data/testimonialData";
const Testimonials = () => {
  const slidePerView = useBreakpointValue({ base: 1, md: 2, xl: 3 });
  return (
    <Container variant={"responsive"} py={"60px"}>
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
