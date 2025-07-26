import Footer from "../components/Footer";
import HomeBook from "../components/HomeBook";
import Navbar from "../components/Navbar";
import LoadingBook from "../components/LoadingBook";
import FeaturedContent from "../components/featureContent";

const Home = () => {
  const home = {
    title: "Yêu Truyện",
    description: "Website đọc truyện chuyển ngữ",
    imageUrl: 'https://oqsx2c43drknwdq2.public.blob.vercel-storage.com/yeutruyenlogo.jpg',
    pageUrl: "https://www.yeutruyen.com.vn",
  };
  return (
    <>
        {/* Standard HTML Tags */}
        <title>{home.title}</title>
        <meta name="description" content={home.description} />

        {/* Open Graph Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={home.title} />
        <meta property="og:description" content={home.description} />
        <meta property="og:image" content={home.imageUrl} />
        <meta property="og:url" content={home.pageUrl} />
      <Navbar />
      <FeaturedContent />
      <LoadingBook />
      <HomeBook />
      <Footer />
    </>
  );
};

export default Home;
