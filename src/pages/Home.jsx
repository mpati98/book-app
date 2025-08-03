import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";
import FeaturedContent from "../components/featureContent";
import image from "../assets/logo4share.png";
import { Helmet } from "react-helmet";

const Home = () => {
  const home = {
    title: "Yêu Truyện",
    description: "Website đọc truyện chuyển ngữ",
    pageUrl: "https://www.yeutruyen.com.vn",
  };
  return (
    <>
      <Helmet>
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={home.description} />
        <meta property="author" href={home.pageUrl} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={home.description} />
      </Helmet>
      <Navbar />
      <FeaturedContent />
      <LoadingBook />
      <HomeBook />
      <Footer />
    </>
  );
};

export default Home;
