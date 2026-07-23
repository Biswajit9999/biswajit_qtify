import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Card from "../Card/Card";
import styles from "./Carousel.module.css";

function Carousel({ data = [], type = "album" }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView="auto"
      className={styles.swiper}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className={styles.slide}
        >
          <Card
            image={item.image}
            title={item.title}
            follows={item.follows}
            likes={item.likes}
            type={type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;