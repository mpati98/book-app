import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";
import FeaturedContent from "../components/featureContent";
import { Helmet } from 'react-helmet-async';
import imgLogo from "../assets/yeutruyenlogo.jpg"

const Home = () => {
    const home = {
    title: "Yêu Truyện",
    description: "Website đọc truyện chuyển ngữ",
    imageUrl: {imgLogo},
    pageUrl: "https://www.yeutruyen.com.vn"
  };
  return (
    <>
      <Helmet>
        {/* Standard HTML Tags */}
        <title>{home.title}</title>
        <meta name="description" content={home.description} />

        {/* Open Graph Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={home.title} />
        <meta property="og:description" content={home.description} />
        <meta property="og:image" content={home.imageUrl} />
        <meta property="og:url" content={home.pageUrl} />
        <meta property="og:type" content="article" />

        {/* X (formerly Twitter) Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={home.title} />
        <meta name="twitter:description" content={home.description} />
        <meta name="twitter:image" content={home.imageUrl} />
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
