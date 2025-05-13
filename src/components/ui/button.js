import React from 'react';
import './App.css';
export const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    {children}
  </button>
);
