import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function AdPlayer({ videoSrc, onSkip }) {
  const [isLoading, setIsLoading] = useState(true);
  const [canSkip, setCanSkip] = useState(false);
  const videoRef = useRef(null);

  // This effect listens to the video's time to enable the skip button
  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        setCanSkip(true);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // Cleanup listener when the component unmounts
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleVideoClick = () => {
        // Navigate to a specific URL
        window.open('https://shopee.vn/-MUA-1-T%E1%BA%B6NG-1-Kem-ch%E1%BB%91ng-n%E1%BA%AFng-AHC-ph%E1%BB%95-r%E1%BB%99ng-400nm-c%C4%83ng-m%C6%B0%E1%BB%9Bt-da-chu%E1%BA%A9n-H%C3%A0n-Masters-Aqua-Rich-Sun-Cream-30ml-i.219192749.27579444616');
        // Or, if you want to open in a new tab:
        // window.open('https://www.example.com/your-destination-page', '_blank');
      };

  return (
    <div className="ad-player-container">
      {isLoading && <div className="loading-spinner">Loading Ad...</div>}

      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onCanPlay={() => setIsLoading(false)} // Hide loading when video is ready
        className={isLoading ? "hidden" : ""}
        onClick={handleVideoClick}
      />

      {canSkip && (
        <button onClick={onSkip} className="skip-button">
          Skip Ad
        </button>
      )}
    </div>
  );
}

export default AdPlayer;