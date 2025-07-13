import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavChapter from "../components/NavChapter";
import ContetChapter from "../components/ContentChapter";
import IntroductionBook from "../components/IntroductionBook";

function BookDetail() {
  const { bookId, chapterId } = useParams();
  const [book, setBook] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(null);

  useEffect(() => {
    fetch(`/data/${bookId}.json`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [bookId]);

  useEffect(() => {
    if (book && chapterId) {
      // Also ensure chapterId exists
      const chapter = book.chapters.find((c) => c.id === parseInt(chapterId));
      setCurrentChapter(chapter);
    } else if (book) {
      // Optional: If no chapterId in URL, set currentChapter to null or a default
      setCurrentChapter(null);
    }
  }, [book, chapterId]);

  if (!book) {
    return <div>Loading book...</div>;
  }

  return (
    <div className="book-container">
      <NavChapter chapters={book.chapters} bookId={bookId} />
      <main className="chapter-content-wrapper">
        {/*
          --- THE FIX ---
          Only render ChapterContent if currentChapter is not null.
        */}
        {currentChapter ? (
          <ContetChapter chapter={currentChapter} book={bookId} />
        ) : (
          <IntroductionBook
            coverImage={book.coverImage}
            category={book.category}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        )}
      </main>
      )
    </div>
  );
}

export default BookDetail;
