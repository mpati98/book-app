import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// 1. Import Autoplay module in addition to EffectCards
import { Autoplay, EffectCards } from "swiper/modules";

// Sample book data (same as before)
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "https://placehold.co/400x600/7B68EE/FFFFFF?text=Book+1",
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "https://placehold.co/400x600/32CD32/FFFFFF?text=Book+2",
  },
  {
    id: 3,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverImage: "https://placehold.co/400x600/FF6347/FFFFFF?text=Book+3",
  },
  {
    id: 4,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    coverImage: "https://placehold.co/400x600/1E90FF/FFFFFF?text=Book+4",
  },
  {
    id: 5,
    title: "Dune",
    author: "Frank Herbert",
    coverImage: "https://placehold.co/400x600/FFD700/000000?text=Book+5",
  },
];

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
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="book-slide">
              <img src={book.coverImage} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
