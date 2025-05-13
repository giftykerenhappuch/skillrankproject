import React from 'react';
import './App.css';

const BillPage = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bill-container">
      <h1 className="bill-title">Your Bill</h1>
      <div className="bill-table-container">
        <table className="bill-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bill-total">Total: ₹{total}</div>
    </div>
  );
};

export default BillPage;
