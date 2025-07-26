import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/contact";
import image from "../assets/logo4share.png";

const Home = () => {
  const home = {
    title: "Yêu Truyện",
    description: "Website đọc truyện chuyển ngữ",
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
      <meta property="og:image" content={image} />
      <meta property="og:url" content={home.pageUrl} />
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
