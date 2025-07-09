import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <LoadingBook />
      <HomeBook />
      <Footer />
    </>
  );
};

export default Home;
