import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingBook from '../components/LoadingBook';

const BookPage = () => {
  return (
      <>
          <Navbar />
          <LoadingBook/>
          <Footer />
      </>
  )
}

export default BookPage