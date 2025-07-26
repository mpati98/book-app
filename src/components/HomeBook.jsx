import React from "react";
import { homeBooksStyles as styles } from "../assets/dummystyles";
import { carouselBooks } from "../assets/dummydata";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HomeBook = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className="text-center mb-12">
            <h2 className={styles.heading}>Thư viện</h2>
            <div className={styles.headingLine} />
          </div>
          <div className={styles.grid}>
            {carouselBooks.map((book) => {
              return (
                <div key={book.id} className={styles.bookCard}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className={styles.image}
                    />
                  </div>
                  <h3 className={styles.title}>{book.title}</h3>
                  {[...Array(book.category)].map((i, _) => (
                    <span className={styles.priceContainer}>{i + " "}</span>
                  ))}
                </div>
              );
            })}
          </div>
          {/* <div className={styles.viewBtnWrapper}>
            <Link to="/books" className={styles.viewBtn}>
              <span>View all books</span>
              <ArrowRight className={styles.viewIcon} />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeBook;
