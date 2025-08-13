import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";
import FeaturedContent from "../components/featureContent";
import image from "../assets/yeutruyenlogo.jpg";
import { Helmet } from "react-helmet";
import FirebaseImage from '../components/FirebaseImage';

const Home = () => {
  
  
  const home = {
    title: "Yêu Truyện",
    description: "Website đọc truyện chuyển ngữ",
    pageUrl: "https://www.yeutruyen.com.vn",
    imgURL: "https://monkeyd.net.vn/images/seo/seo-image.png"
  };
  return (
    <>
      <Helmet>
        <meta property="og:image" content={home.imgURL } />
        <meta property="og:image:alt" content={home.description} /> 
        <meta property="author" href={home.pageUrl} />
        <meta name="twitter:image" content={<FirebaseImage imagePath="/product_images/yeutruyenlogo.jpg" />} />
        <meta name="twitter:image:alt" content={home.description} />
      </Helmet>
      <Navbar />
      <FeaturedContent />
      <LoadingBook />
      <HomeBook />
      <Footer/>
    </>
  );
};

export default Home;
