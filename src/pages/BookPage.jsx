import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Books from '../components/Books';

const BookPage = () => {
  return (
      <>
          <Navbar />
          <Books/>
          <Footer />
      </>
  )
}

export default BookPage