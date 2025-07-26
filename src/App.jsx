import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import BookReading from "./pages/BookReading";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage /> } />
      <Route path="/books" element={<BookPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book/:bookId" element={<BookReading />} />
      <Route path="/book/:bookId/chapter/:chapterId" element={<BookReading />} />
    </Routes>
  );
};

export default App;
