// src/components/FirebaseImage.jsx

import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

// Your Firebase configuration object should be initialized elsewhere and imported
// For example: import { storage } from '../firebaseConfig';

const FirebaseImage = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make sure an imagePath is provided before proceeding
    if (!imagePath) {
        return;
    }

    const fetchImageUrl = async () => {
      // Get a reference to the storage service, which is used to create references in your bucket

      // Create a reference to the file you want to download
      const imageRef = ref(storage, imagePath);

      try {
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (err) {
        console.error("Error fetching image URL:", err);
        setError("Failed to load image. Check storage rules and file path.");
      }
    };

    fetchImageUrl();
  }, [imagePath]); // Re-run the effect if the imagePath prop changes

  if (error) {
    return <div>{error}</div>;
  }

  // Display a loading message or placeholder while the URL is being fetched
  if (!imageUrl) {
    return <div>Loading image...</div>;
  }

  // Render the image once the URL is available
  return (
    <img src={imageUrl} alt="Uploaded from Firebase" style={{ width: '300px', height: 'auto' }} />
  );
};

export default FirebaseImage;