import Banner from "../components/Banner";
import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";
import FeaturedContent from "../components/featureContent";

const Home = () => {
  return (
    <>
      <Navbar />
      <FeaturedContent />
      <LoadingBook />
      <HomeBook />
      <Footer />
    </>
  );
};

export default Home;
