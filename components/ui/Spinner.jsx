// components/ui/Spinner.js
import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
