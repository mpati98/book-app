import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestSeller />
      <HomeBook />
      <Footer />
    </>
  );
};

export default Home;
