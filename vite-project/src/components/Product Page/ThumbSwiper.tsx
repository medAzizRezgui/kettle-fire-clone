import React from "react";
import EnjoySlideItem from "./EnjoySlideItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

type Props = {
  initIndex: number;
};
const ThumbSwiper: React.FC<Props> = ({ initIndex }) => {
  return (
    <Swiper
      initialSlide={initIndex}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={35}
      navigation
      slidesPerView={1}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            isActive={isActive}
            src={
              "https://cdn.shopify.com/s/files/1/1775/1825/products/2-kf-amazon-classic-chicken-nutrition_1024x1024.jpg?v=1629298069"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            isActive={isActive}
            src={
              "https://cdn.shopify.com/s/files/1/1775/1825/products/7-Ingredients-Chicken-Bone-Broth_1024x1024.jpg?v=1629298069"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            isActive={isActive}
            src={
              "https://cdn.shopify.com/s/files/1/1775/1825/products/2_chicken-lifestyle-pouring-square_1024x1024.png?v=1629307716"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            isActive={isActive}
            src={
              "https://cdn.shopify.com/s/files/1/1775/1825/products/3_chicken-lifestyle-woman-pouring-square_1024x1024.png?v=1629307783"
            }
          />
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <EnjoySlideItem
            isActive={isActive}
            src={
              "https://cdn.shopify.com/s/files/1/1775/1825/products/4_chicken-lifestyle-woman-pouring-square_1024x1024.jpg?v=1629307720"
            }
          />
        )}
      </SwiperSlide>
    </Swiper>
  );
};

export default ThumbSwiper;
