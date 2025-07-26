import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// 1. Import Autoplay module in addition to EffectCards
import { Autoplay, EffectCards } from "swiper/modules";
import { carouselBooks } from "../assets/dummydata";

export default function BookCarousel() {
  return (
    <div className="book-carousel-container">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, EffectCards]} // 2. Add Autoplay to the modules array
        className="mySwiper"
        // 3. Add the autoplay configuration object
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {carouselBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="book-slide">
              <img src={book.coverImage} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
