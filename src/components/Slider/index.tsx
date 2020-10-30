import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import Card from "./Card";
import category from "../../assets/categories.json";
import SliderButton from "./SliderButton";
SwiperCore.use([Navigation]);

const Slider: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <SliderButton selector="prev" />
      <SliderButton selector="next" />
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {category.map((cardCategory, ind) => (
          <SwiperSlide virtualIndex={ind} key={cardCategory.path}>
            <Card
              category={cardCategory.label}
              img={require("./assets/salon.jpg")}
              path={cardCategory.path}
              count="10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
