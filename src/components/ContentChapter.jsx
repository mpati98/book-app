import React, { useState, useEffect } from "react";
import AdPlayer from "../components/adLoading";

function ContenChapter({ chapter, book }) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAd, setShowAd] = useState(true);

  // This function will be called when the skip button is clicked
  const handleSkipAd = () => {
    setShowAd(false);
  };

  // Replace with the actual URL or path to your video file
  const adVideoURL = "https://www.w3schools.com/html/mov_bbb.mp4"; // Example video
  useEffect(() => {
    fetch(`/data/${book}/${chapter.id}.txt`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        setData(text);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [chapter, book]); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error.message}</div>;
  }

  if (!chapter) {
    return (
      <div className="chapter-content">Select a chapter to start reading.</div>
    );
  }

  return (
    <>
      {showAd ? (
        <AdPlayer videoSrc={adVideoURL} onSkip={handleSkipAd} />
      ) : (
        <main className="chapter-content-wrapper">
          <pre className="whitespace-pre-line">
            <code>{data}</code>
          </pre>
        </main>
      )}
    </>
  );
}

export default ContenChapter;
