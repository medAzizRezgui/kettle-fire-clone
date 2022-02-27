import React from "react";
import { data } from "../../data/aboutUsData";
import { Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
const AboutUsImages = () => {
  const slides = useBreakpointValue({ base: 1.5, md: 3 });
  return (
    <Swiper slidesPerView={slides} spaceBetween={10}>
      {data.map((item, i) => (
        <SwiperSlide key={i}>
          <VStack width={"100%"} align={"center"}>
            <Image
              loading={"lazy"}
              src={item.image}
              alt="item"
              sx={styles.itemImage}
            />
            <Text sx={styles.text}>{item.text}</Text>
          </VStack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutUsImages;
const styles = {
  text: {
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "center",
  },
  itemImage: {
    maxWidth: "200px",
  },
};
