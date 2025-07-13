import React, { useState, useEffect } from 'react';

function ContenChapter({chapter, book}) {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
    fetch(`/data/${book}/${chapter.id}.txt`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        setData(text);
      })
      .catch(err => {
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
    return <div style={{ color: 'red' }}>Error: {error.message}</div>;
  }

  if (!chapter) {
    return <div className="chapter-content">Select a chapter to start reading.</div>;
  }


  return (
    <main className="chapter-content">
      <h2>{chapter.title}</h2>
      <pre>{data}</pre>
    </main>
  );
}

export default ContenChapter;