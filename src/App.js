import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Input from './components/Input';
import Result from './components/Result';
import Redirect from './components/Redirect';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the input form */}
        <Route path="/" element={<Input />} />
        
        {/* Route for displaying the shortened URL */}
        <Route path="/result/:id" element={<Result />} />
        
        {/* Route for redirection to original URL */}
        <Route path="/:shortCode" element={<Redirect />} />
        
        {/* Route for showing 404 page */}
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
