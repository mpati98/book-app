import React, { useState } from "react";
import { Star, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { booksPageStyles as styles } from "../assets/dummystyles";

import BP1 from "../assets/BP1.png";
import BP2 from "../assets/BP2.png";
import BP3 from "../assets/BP3.png";
import BP4 from "../assets/BP4.png";
import BP5 from "../assets/BP5.png";
import BP6 from "../assets/BP6.png";
import BP7 from "../assets/BP7.png";
import BP8 from "../assets/BP8.png";
import BP9 from "../assets/BP9.png";
import BP10 from "../assets/BP10.png";
import BP11 from "../assets/BP11.png";
import BP12 from "../assets/BP12.png";
import BP13 from "../assets/BP13.png";
import BP14 from "../assets/BP14.png";
import BP15 from "../assets/BP15.png";
import BP16 from "../assets/BP16.png";

const Books = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchFromURL = queryParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchFromURL);
  const [sortBy, setSortBy] = useState("title");
  const [filterCategory, setFilterCategory] = useState("all");

  const books = [
    {
      id: 1,
      title: "Le Tour Do Monde",
      author: "Perkin Didot",
      price: "599",
      description:
        "A portrait of the Jazz Age in all of its decadence and excess...",
      image: BP1,
      rating: 5,
    },
    {
      id: 2,
      title: "The Poems Of Byron",
      author: "Houghton Mifflin Co",
      price: "450",
      description:
        "A powerful story of racial injustice and the loss of innocence...",
      image: BP2,
      rating: 5,
    },
    {
      id: 3,
      title: "Aloe",
      author: "Subman",
      price: "399",
      description:
        "A dystopian novel about totalitarianism and mass surveillance...",
      image: BP3,
      rating: 5,
    },
    {
      id: 4,
      title: "The Castle in the Forest",
      author: "Norman Mailer",
      price: "349",
      description:
        "A romantic novel of manners set in early 19th century England...",
      image: BP4,
      rating: 5,
    },
    {
      id: 5,
      title: "Lyttkens Och Wulff",
      author: "Svenska Sprikets",
      price: "425",
      description: "A story of teenage alienation and loss of innocence...",
      image: BP5,
      rating: 5,
    },
    {
      id: 6,
      title: "Dostoevskij",
      author: "L'idiota",
      price: "549",
      description:
        "The epic tale of Captain Ahab's obsession with a white whale...",
      image: BP6,
      rating: 5,
    },
    {
      id: 7,
      title: "War and Peace",
      author: "Leo Tolstoy",
      price: "699",
      description:
        "A monumental work set during the Napoleonic invasion of Russia...",
      image: BP7,
      rating: 5,
    },
    {
      id: 8,
      title: "The Odyssey",
      author: "David Lodge",
      price: "299",
      description: "The epic journey of Odysseus as he tries to return home...",
      image: BP8,
      rating: 5,
    },
    {
      id: 9,
      title: "The Design Of Books",
      author: "Debbie Bern",
      price: "379",
      description:
        "A Gothic tale of science gone wrong and its consequences...",
      image: BP9,
      rating: 5,
    },
    {
      id: 10,
      title: "The Crossing",
      author: "Jason Mott",
      price: "425",
      description: "A psychological exploration of guilt and redemption...",
      image: BP10,
      rating: 5,
    },
    {
      id: 11,
      title: "The Phoenix Of Destiny",
      author: "Geronimo Stilton",
      price: "499",
      description: "A fantasy adventure through Middle-earth...",
      image: BP11,
      rating: 5,
    },
    {
      id: 12,
      title: "The Author",
      author: "Raj Siddhi",
      price: "399",
      description:
        "A dystopian vision of a scientifically engineered society...",
      image: BP12,
      rating: 5,
    },
    {
      id: 13,
      title: "The Doctor",
      author: "Oscar Patton",
      price: "549",
      description: "An epic journey through Hell, Purgatory, and Paradise...",
      image: BP13,
      rating: 5,
    },
    {
      id: 14,
      title: "Darkness Gathers",
      author: "Emma Elliot",
      price: "325",
      description:
        "A turbulent story of passion and revenge on the Yorkshire moors...",
      image: BP14,
      rating: 5,
    },
    {
      id: 15,
      title: "Gitanjali",
      author: "RabindraNath Tagore",
      price: "449",
      description: "The epic poem about the Trojan War and Achilles' rage...",
      image: BP15,
      rating: 5,
    },
    {
      id: 16,
      title: "The Unwilling",
      author: "John Hart",
      price: "399",
      description:
        "The adventures of a nobleman who imagines himself a knight...",
      image: BP16,
      rating: 5,
    },
  ];

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      filterCategory === "all" || book.category === filterCategory;
    const lowerSearch = searchTerm.toLocaleLowerCase();
    const matchSearch =
      searchTerm === "" ||
      book.title.toLocaleLowerCase().includes(lowerSearch) ||
      book.author.toLocaleLowerCase().includes(lowerSearch);
    return matchCategory && matchSearch;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      default:
        return a.title.localeCompare(b.title, undefined, {
          sensitivity: "base",
          numeric: true,
        });
    }
  });

  const categories = [
    "all",
    ...new Set(books.map((book) => book.category).filter(Boolean)),
  ];
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}>Literary Universe</h1>
          <p className={styles.headerSubtitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            distinctio, voluptate a similique possimus blanditiis eaque ipsa
            pariatur atque maxime ut odit eos explicabo libero dolores illum,
            porro quibusdam ipsum.
          </p>
        </div>
        <div className={styles.searchWrapper}>
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchIconWrapper}>
              <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-focus-within:text-[#43C6Ac]" />
            </div>
            <input
              type="text"
              placeholder="Search title, author ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterRow}>
            <div className={styles.selectGroup}>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={styles.selectBox}
              >
                {categories.map((category) => (
                  <option value={category} key={category}>
                    {category === "all" ? "All Genres" : category}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.selectBox}
              >
                <option value="title">Sort by Title</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <div className={styles.resultText}>
              Showing {sortedBooks.length} results
            </div>
          </div>
        </div>
        <div className={styles.booksGrid}>
          {sortedBooks.map((book) => {
            return (
              <div key={book.id} className={styles.bookCard}>
                <Link to={`/book/${book.id}`}>
                <div className={styles.imageWrapper}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className={styles.imageStyle}
                  />
                </div>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>by {book.author}</p>
                <div className={styles.ratingWrapper}>
                  {[
                    ...Array(
                      Number.isFinite(book.rating) ? Math.floor(book.rating) : 0
                    ),
                  ].map((_, index) => (
                    <Star
                      className="w-4 h-4 fill-yellow-400 stroke-yellow-400"
                      key={index}
                    />
                  ))}
                  <span>
                    (
                    {Number.isFinite(book.rating)
                      ? book.rating.toFixed(1)
                      : "N/A"}
                    )
                  </span>
                </div>
                  <p className={styles.description}>{book.description}</p>
                  </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
