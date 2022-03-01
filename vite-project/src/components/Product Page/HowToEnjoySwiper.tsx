import React from "react";
import EnjoySlideItem from "./EnjoySlideItem";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HowToEnjoySwiper = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={35}
      slidesPerView={1.25}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            text={"Early Morning Wake-Up"}
            isActive={isActive}
            src={
              "https://cdn.kettleandfire.com/cfd821f7-5fb1-4539-affe-2e995ba297b9/-/format/auto/-/quality/lighter/-/max_icc_size/10/-/resize/800x/"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            text={"Mid-Morning Break"}
            isActive={isActive}
            src={
              "https://cdn.kettleandfire.com/a9e58608-09e1-4df0-91aa-d45277eb496c/-/format/auto/-/quality/lighter/-/max_icc_size/10/-/resize/800x/"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            text={"Afternoon Pick-Me-Up"}
            isActive={isActive}
            src={
              "https://cdn.kettleandfire.com/568f13b0-c7a7-4394-b92f-b68f994777f7/-/format/auto/-/quality/lighter/-/max_icc_size/10/-/resize/800x/"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            text={"Evening Wind-Down"}
            isActive={isActive}
            src={
              "https://cdn.kettleandfire.com/1b3430ce-80c6-4329-bb2b-53c851f18fea/-/format/auto/-/quality/lighter/-/max_icc_size/10/-/resize/800x/"
            }
          />
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default HowToEnjoySwiper;
