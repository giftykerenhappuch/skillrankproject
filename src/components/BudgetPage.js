import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import your custom CSS file

const BudgetPage = ({ setBudget }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    setBudget(Number(input));
    navigate('/gifts');
  };

  return (
    <div className="budget-page">
      <div className="content">
        <h1 className="heading">Gift Planning</h1>
        <p className="description">Enter your budget to start shopping for gifts.</p>

        <input
          type="number"
          className="budget-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="₹ Enter budget"
        />
        
        <button className="start-shopping-btn" onClick={handleSubmit}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default BudgetPage;
