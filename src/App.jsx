import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import BookDetail from "./pages/BookDetail";
import BookReading from "./pages/BookReading";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/book/:bookId" element={<BookReading />} />
      <Route path="/book/:bookId/chapter/:chapterId" element={<BookReading />} />
    </Routes>
  );
};

export default App;
