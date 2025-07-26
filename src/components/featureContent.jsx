import AdsSection from './adsSection'; // Import the ad component
import BookCarousel from './bookCarousel'; // Import the carousel component

function FeaturedContent() {
  // Data for the advertising section
  const promoData = {
    headline: "Cốc uống nước bằng gốm",
    description: "Quà tặng sinh nhật Cốc uống nước bằng gốm hình bánh dễ thương hình bánh 410ml thích hợp làm quà tặng chất lượng cao cấp",
    buttonText: "Shop Now",
    buttonLink: "https://shopee.vn/product/1322506201/41800775990?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkZmdTUmpMeSszRElEdm91eXFrOVhzNGV3bWJTMWxlWnhKclJCblVBM2dDQUJGMUlnQkhoREhlWDk0MTFPdEJmUGhjR3ZQWFBnTlZLU3RFcFBPMTUwYnRscUdUV2VETEU3UE1PMWpPMkNsa1dPcHRNeDNZK2lKMlYxbG5ZWGxSblJuTUxtS1dNeC94QlM4cVpNY1dLTmVzPQ&uls_trackid=539u1f8f006h&utm_campaign=id_13dMG7b7mH6&utm_content=----&utm_medium=affiliates&utm_source=an_17325660291&utm_term=de2m35uqk1fd",
    backgroundImage: "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9q3z9oj66wyf6"
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