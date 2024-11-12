import React from 'react';
import { useParams } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';

const Result = () => {
  const { id } = useParams(); // Extract short URL ID from URL params
  const shortUrl = `${window.location.origin}/${id}`; // Construct full short URL

  return (
    <div className="container result-page">
      <h2>Your Shortened URL</h2>
      {/* Display the short URL and allow the user to copy it */}
      <input type="text" value={shortUrl} readOnly onClick={() => navigator.clipboard.writeText(shortUrl)} />
      <p>Click to copy</p>
      
      {/* Generate and display QR code for the short URL */}
      <QRCodeGenerator url={shortUrl} />
    </div>
  );
};

export default Result;
