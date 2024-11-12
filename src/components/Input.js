import React, { useState, useMemo } from 'react';
import { db } from '../config/firebase'; // Firebase database configuration
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'; // Firebase Firestore methods
import { useNavigate } from 'react-router-dom'; // React Router for navigation

import {} from "../App.css"; // Import CSS (not used directly here)

const Input = () => {
  // State for storing URL and custom short code
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');

  const navigate = useNavigate();

  // Memoize the Firestore collection reference
  const urlsCollection = useMemo(() => collection(db, 'urls'), []);

  // Handle URL shortening on form submission
  const handleSubmit = async () => {
    if (!url) return; // Don't proceed if URL is empty

    try {
      // Generate short code (custom or random)
      const shortCode = customCode || Math.random().toString(36).substring(2, 8);

      // Check if short code already exists
      const q = query(urlsCollection, where('shortCode', '==', shortCode));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert('This short code is already in use.');
        return;
      }

      // Add the URL to Firestore and navigate to the result page
      await addDoc(urlsCollection, { originalUrl: url, shortCode });
      navigate(`/result/${shortCode}`);
    } catch (error) {
      console.error("Error creating short URL:", error); // Log any errors
    }
  };

  return (
    <div className="container">
      <h2>Shorten Your URL</h2>
      {/* Input for original URL */}
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)} // Update URL state
      />
      {/* Input for custom short code */}
      <input
        type="text"
        placeholder="Custom short code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)} // Update custom code state
      />
      {/* Button to generate the short URL */}
      <button onClick={handleSubmit}>Generate Short URL</button>
    </div>
  );
};

export default Input;
