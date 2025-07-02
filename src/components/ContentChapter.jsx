import React from 'react';

function ContenChapter({ chapter }) {
  if (!chapter) {
    return <div className="chapter-content">Select a chapter to start reading.</div>;
  }

  return (
    <main className="chapter-content">
      <h2>{chapter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: chapter.content }}></div>
    </main>
  );
}

export default ContenChapter;