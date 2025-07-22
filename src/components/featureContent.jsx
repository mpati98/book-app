import AdsSection from './adsSection'; // Import the ad component
import BookCarousel from './bookCarousel'; // Import the carousel component

function FeaturedContent() {
  // Data for the advertising section
  const promoData = {
    headline: "Summer Reading Collection",
    description: "Discover captivating stories and new adventures. Get 20% off all best-sellers.",
    buttonText: "Shop Now",
    buttonLink: "/shop/summer-collection",
    backgroundImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
  };

  return (
    <div className="featured-container">
      {/* Left Column for Advertising */}
      <div className="featured-column ad-column">
        <AdsSection {...promoData} />
      </div>

      {/* Right Column for Book Carousel */}
      <div className="featured-column carousel-column">
        <BookCarousel />
      </div>
    </div>
  );
}

export default FeaturedContent;