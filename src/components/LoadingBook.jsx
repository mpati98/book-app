import { useEffect, useState, useRef } from "react";
import Airtable from "airtable";
import { ourBestSellersStyles as styles } from "../assets/dummystyles";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { bgColors } from '../assets/dummydata'
import { Link, useNavigate } from 'react-router-dom'
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "Books";

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

const LoadingBook = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  const scrollRef = useRef(null);

  const scrollLeft = () =>
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });


  const toBook = (bookId) => {
    navigate(`/book/${bookId}`)
    incrementView(records, bookId)
  }

  useEffect(() => {
    base(AIRTABLE_TABLE_NAME)
      .select({
        // Optional: specify fields, sorting, filtering, etc.
        // For example, to sort by a 'Name' field:
        // sort: [{ field: 'Name', direction: 'asc' }],
        // maxRecords: 10, // Limit the number of records
        view: "Grid view", // Specify a particular view
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function will be called for each page of records.
          setRecords((prevRecords) => [...prevRecords, ...records]);
          fetchNextPage(); // Fetch the next page of records
        },
        function done(err) {
          if (err) {
            console.error(err);
            setError(err);
          }
          setLoading(false);
        }
      );
  }, []); // Empty dependency array means this effect runs once on component mount

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const incrementView = (records, bookID) => {
    const currentBook = records.filter(book => book.fields.BookID === bookID)
    const currentView = currentBook[0].fields.Views
    const newView = currentView+1
    base(AIRTABLE_TABLE_NAME).update([
      {
        id: currentBook[0].id,
        fields: {
          Views: newView
        }
      }
    ])
  }
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* {Header} */}
        <div className={styles.headerWrapper}>
          <div className={styles.headerText}>
            <h1 className={styles.title}>
              <span className={styles.gradientText}>Top truyện phổ biến</span>
            </h1>
            <p className={styles.subtitle}>Top đánh giá từ đọc giả</p>
          </div>
          {/* {RIGHT BTNS FOR MOVING LEFT AND RIGHT} */}
          <div className={styles.navWrapper}>
            <div className={styles.navLine} />
            <div className={styles.navButtons}>
              <button onClick={scrollLeft} className={styles.navBtn}>
                <ChevronLeft className={styles.navIcon} size={20} />
              </button>
              <button onClick={scrollRight} className={styles.navBtn}>
                <ChevronRight className={styles.navIcon} size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* {BOOKS SECTIONS} */}
        <div className={styles.scrollContainer} ref={scrollRef}>
          {records.map((book, index) => (
            <div
              className={styles.card(bgColors[index % bgColors.length])}
              key={index}
              onClick={() => toBook(book.fields.BookID)}
            >
              <div className={styles.cardInner}>
                <div className="space-y-3 md:space-y-4">
                  <div className={styles.stars}>
                    {[...Array(book.fields.rating)].map((_, i) => (
                      <Star
                        className="h-4 w-4 md:h-5 md:w-5 text-amber-400 fill-amber-400"
                        key={i}
                      />
                    ))}
                  </div>
                  <div className={styles.bookInfo}>
                    <h2 className={styles.bookTitle}>{book.fields.Name}</h2>
                    <p className={styles.bookAuthor}>{book.fields.Author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadingBook;
