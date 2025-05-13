import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-box">
        <h1 className="success-title">Purchase Successful!</h1>
        <p className="success-message">Your gifts were successfully purchased within the budget.</p>
        <button className="view-bill-button" onClick={() => navigate('/bill')}>
          View Bill
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
