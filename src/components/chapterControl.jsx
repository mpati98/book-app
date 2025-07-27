import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import AdPlayer from "../components/adLoading";

function NavChapter({
  chapters,
  bookId,
  chaptersPerPage = 10,
  onNavigateToChapter,
}) {
  const { chapterId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const currentChapterId = parseInt(chapterId);
  const [showAd, setShowAd] = useState(true);
  const [count, setCount] = useState(0);
  const [countUpdates, setCountUpdates] = useState(0);

  // This function will be called when the skip button is clicked
  const handleSkipAd = () => {
    setShowAd(false);
  };

  // Replace with the actual URL or path to your video file
  const adVideoURL = "/shopee_add.mp4"; // Example video

  useEffect(() => {
    setCountUpdates((prev) => prev + 1);
    setShowAd(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: adds a smooth scrolling animation
    });
  }, [count, currentChapterId, chapters, chaptersPerPage]);

  // --- Next/Previous Chapter Logic ---
  const currentChapterIndex = chapters.findIndex(
    (c) => c.id === currentChapterId
  );
  const nextChapter = chapters[currentChapterIndex + 1];
  const prevChapter = chapters[currentChapterIndex - 1];

  const handleChapterNavigation = useCallback(
    (selectedChapterId) => {
      if (!selectedChapterId) return; // Guard against trying to navigate to a non-existent chapter
      const targetPath = `/book/${bookId}/chapter/${selectedChapterId}`;
      if (onNavigateToChapter) {
        onNavigateToChapter(targetPath);
      } else {
        navigate(targetPath); // Fallback to direct navigation
      }
    },
    [bookId, onNavigateToChapter, navigate]
  );
  // Handler for select dropdown change
  const handleSelectChange = (event) => {
    const selectedChapterId = parseInt(event.target.value);
    // Navigate to the selected chapter
    navigate(`/book/${bookId}/chapter/${selectedChapterId}`);
    setCount(count + 1);
  };

  return (
    <>
      {count === 2 && showAd ? (
        <AdPlayer
          videoSrc={adVideoURL}
          onSkip={handleSkipAd}
          onChange={() => setCount(0)}
        />
      ) : (
        <div className="content-end-section">
          {/* New: Next/Previous Chapter Buttons */}
          <div className="next-chapter-section">
            <button
              onClick={() => handleChapterNavigation(prevChapter?.id)}
              disabled={!prevChapter}
              className="next-chapter-btn"
            >
              &larr; Chương trước
            </button>
            {/* Select Chapter Dropdown */}
            <div className="chapter-select-container">
              <select
                id="chapter-selector"
                value={currentChapterId || ""} // Set the current chapter as selected
                onChange={handleSelectChange}
              >
                {chapters.map((chapter) => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.title}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => handleChapterNavigation(nextChapter?.id)}
              disabled={!nextChapter}
              className="next-chapter-btn"
            >
              Chương tiếp theo &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default NavChapter;
