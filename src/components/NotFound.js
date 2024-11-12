import React from 'react';

const NotFound = () => (
  <div className="container">
    <h2>404 - Link Not Found</h2>
    {/* Show a 404 error if the URL is not found */}
    <p>The shortened link you entered does not exist.</p>
  </div>
);

export default NotFound;
