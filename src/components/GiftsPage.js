import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure this CSS includes styles for .gifts-page, .gift-card, etc.

const GiftsPage = ({ gifts, budget, cart, setCart }) => {
  const navigate = useNavigate();
  let total = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (gift) => {
    if (total + gift.price <= budget) {
      setCart([...cart, gift]);
    } else {
      navigate('/exceeded', { state: { amount: total + gift.price - budget } });
    }
  };

  const handleCheckout = () => {
    if (total <= budget) {
      navigate('/success');
    }
  };

  return (
    <div className="gifts-page">
      <h1 className="page-title">Available Gifts</h1>
      <div className="gift-grid">
        {gifts.map((gift) => (
          <div key={gift.id} className="gift-card">
            <img src={gift.img} alt={gift.name} className="gift-image" />
            <h2 className="gift-name">{gift.name}</h2>
            <p className="gift-price">₹{gift.price}</p>
            <button className="gift-button" onClick={() => addToCart(gift)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="checkout-section">
        <p className="total-price">Total: ₹{total}</p>
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default GiftsPage;
