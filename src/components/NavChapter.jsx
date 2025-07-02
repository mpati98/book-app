import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'; // Import useNavigate

function NavChapter({ chapters, bookId, chaptersPerPage = 10 }) {
  const { chapterId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const currentChapterId = parseInt(chapterId);

  // Pagination logic (from previous improvement)
  const totalPages = Math.ceil(chapters.length / chaptersPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (chapters.length > 0) {
      const currentChapterIndex = chapters.findIndex(
        (chapter) => chapter.id === currentChapterId
      );
      if (currentChapterIndex !== -1) {
        const pageOfCurrentChapter = Math.floor(currentChapterIndex / chaptersPerPage) + 1;
        setCurrentPage(pageOfCurrentChapter);
      }
    }
  }, [currentChapterId, chapters, chaptersPerPage]);

  const startIndex = (currentPage - 1) * chaptersPerPage;
  const endIndex = startIndex + chaptersPerPage;
  const displayedChapters = chapters.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage(prevPage => Math.max(1, prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage(prevPage => Math.min(totalPages, prevPage + 1));
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
  };

  return (
    <nav className="chapter-nav">
      {/* Select Chapter Dropdown */}
      <div className="chapter-select-container">
        <label htmlFor="chapter-selector">Jump to Chapter:</label>
        <select
          id="chapter-selector"
          value={currentChapterId || ''} // Set the current chapter as selected
          onChange={handleSelectChange}
        >
          <option value="" disabled>Select a chapter</option> {/* Optional placeholder */}
          {chapters.map(chapter => (
            <option key={chapter.id} value={chapter.id}>
              {chapter.title}
            </option>
          ))}
        </select>
      </div>

      {/* Existing list-based navigation */}
      <ul>
        {displayedChapters.map(chapter => (
          <li key={chapter.id}>
            <Link
              to={`/book/${bookId}/chapter/${chapter.id}`}
              className={currentChapterId === chapter.id ? 'active' : ''}
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
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next &rsaquo;
          </button>
          <button onClick={goToLastPage} disabled={currentPage === totalPages}>
            Last &raquo;
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavChapter;