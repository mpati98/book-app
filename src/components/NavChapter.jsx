import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import AdPlayer from "../components/adLoading";

function NavChapter({ chapters, bookId, chaptersPerPage = 10 }) {
  const { chapterId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const currentChapterId = parseInt(chapterId);
  const [showAd, setShowAd] = useState(true);
  const [count, setCount] = useState(0);
  const [countUpdates, setCountUpdates] = useState(0);

  // This function will be called when the skip button is clicked
  const handleSkipAd = () => {
    setShowAd(false);
    setCount(0);
  };

  // Replace with the actual URL or path to your video file
  const adVideoURL = "/shopee_add.mp4"; // Example video

  // Pagination logic (from previous improvement)
  const totalPages = Math.ceil(chapters.length / chaptersPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCountUpdates((prev) => prev + 1);
    setShowAd(true);
    if (chapters.length > 0) {
      const currentChapterIndex = chapters.findIndex(
        (chapter) => chapter.id === currentChapterId
      );
      if (currentChapterIndex !== -1) {
        const pageOfCurrentChapter =
          Math.floor(currentChapterIndex / chaptersPerPage) + 1;
        setCurrentPage(pageOfCurrentChapter);
      }
    }
  }, [count, currentChapterId, chapters, chaptersPerPage]);

  const startIndex = (currentPage - 1) * chaptersPerPage;
  const endIndex = startIndex + chaptersPerPage;
  const displayedChapters = chapters.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

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
        <nav className="chapter-nav">
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

          {/* Existing list-based navigation */}
          <ul>
            {displayedChapters.map((chapter) => (
              <li key={chapter.id} onClick={() => setCount(count + 1)}>
                <Link
                  to={`/book/${bookId}/chapter/${chapter.id}`}
                  className={currentChapterId === chapter.id ? "active" : ""}
                >
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>

          {totalPages > 1 && (
            <div className="pagination-controls">
              <button onClick={goToFirstPage} disabled={currentPage === 1}>
                &laquo; First
              </button>
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                &lsaquo; Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                Next &rsaquo;
              </button>
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
              >
                Last &raquo;
              </button>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
export default NavChapter;
