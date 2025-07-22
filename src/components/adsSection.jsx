import React from 'react';

function AdSection({ headline, description, buttonText, buttonLink, backgroundImage }) {
  // Inline style to dynamically set the background image
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <section className="ad-section" style={sectionStyle}>
      <div className="ad-overlay">
        <div className="ad-content">
          <h2>{headline}</h2>
          <p>{description}</p>
          <a href={buttonLink} className="cta-button">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdSection;