import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

const ExceedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location?.state?.amount || 0;

  return (
    <div className="exceed-container">
      <div className="exceed-box">
        <h1 className="exceed-title">Budget Exceeded!</h1>
        <p className="exceed-message">You exceeded by ₹{amount}</p>
        <button className="back-button" onClick={() => navigate('/gifts')}>
          Back to Gifts
        </button>
      </div>
    </div>
  );
};

export default ExceedPage;
