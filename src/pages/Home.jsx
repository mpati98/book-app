import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";
import FeaturedContent from "../components/featureContent";
import image from "../assets/logo4share.png";

const Home = () => {
  const home = {
    title: "Yêu Truyện",
    description: "Website đọc truyện chuyển ngữ",
    pageUrl: "https://www.yeutruyen.com.vn",
  };
  return (
    <>
      <article className="invisible hidden">
        <h1>{home.title }</h1>
        <title>Trang chủ</title>\
        <link rel="author" href={home.pageUrl} />
        <meta name="keywords" content="" />
        <img src={image} alt="Yêu truyện logo" />
        <p>{home.description}</p>
      </article>
      <Navbar />
      <FeaturedContent />
      <LoadingBook />
      <HomeBook />
      <Footer />
    </>
  );
};

export default Home;
