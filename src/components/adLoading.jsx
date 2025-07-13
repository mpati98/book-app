import React, { useState, useEffect, useRef } from "react";

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
