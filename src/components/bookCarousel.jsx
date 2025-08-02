import React from "react";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// 1. Import Autoplay module in addition to EffectCards
import { Autoplay, EffectCards } from "swiper/modules";
import { carouselBooks } from "../assets/bookappdata";

export default function BookCarousel() {
  const navigate = useNavigate();
    const toBook = (bookId) => {
    navigate(`/book/${bookId}`);
  };
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
            <div className="book-slide"
            onClick={() => toBook(book.id)}
            >

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
