import React, { useState, useEffect } from 'react';

function IntroductionBook({
  coverImage,
  category,
  title,
  author,
  description,
}) {
    const categories = category.split(",");
    
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
    fetch(`${description}`)
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
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error.message}</div>;
  }

  return (
    <section className="intro-section">
      {/* Cover Image Container */}
      <div className="cover-image-container">
        <img src={coverImage} alt={`${title} book cover`} />
      </div>

      {/* Introduction Content */}
          <div className="intro-content">
        <h1>{title}</h1>
        {categories.map((item, index) => (
          <span key={index} className="category">
            {item}
          </span>
        ))}
        <p className="author">Đăng bởi: {author}</p>
        <p className="description">{data}</p>
      </div>
    </section>
  );
}

export default IntroductionBook;
