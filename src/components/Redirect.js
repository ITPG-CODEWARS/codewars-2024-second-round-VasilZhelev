import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Firebase database configuration
import { collection, query, where, getDocs } from 'firebase/firestore'; // Firebase Firestore methods

const Redirect = () => {
  const { shortCode } = useParams(); // Extract short code from URL params
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the original URL based on the short code
    const fetchUrl = async () => {
      const q = query(collection(db, 'urls'), where('shortCode', '==', shortCode));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const originalUrl = querySnapshot.docs[0].data().originalUrl;
        setLoading(false);
        window.location.href = originalUrl; // Redirect to original URL
      } else {
        navigate('/not-found'); // Navigate to 404 page if not found
      }
    };
    fetchUrl();
  }, [shortCode, navigate]);

  return loading ? <p>Redirecting...</p> : null; // Show loading text while fetching
};

export default Redirect;
