import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BudgetPage from './components/BudgetPage';
import GiftsPage from './components/GiftsPage';
import ExceedPage from './components/ExceedPage';
import SuccessPage from './components/SuccessPage';
import BillPage from './components/BillPage';

// Sample Gift Data (with Images)
const gifts = [
  { id: 1, name: 'Teddy Bear', price: 500, img: require('./assets/images/teddy.webp') },
  { id: 2, name: 'Perfume', price: 1200, img: require('./assets/images/perfume.jfif') },
  { id: 3, name: 'Watch', price: 2500, img: require('./assets/images/watch.jfif') },
  { id: 4, name: 'Chocolates', price: 300, img: require('./assets/images/chocolate.jfif') },
  { id: 5, name: 'Flowers', price: 200, img: require('./assets/images/flowers.jfif') },
  { id: 1, name: 'Scented Candle', price: 400, img: require('./assets/images/candle.jpg') },
  { id: 2, name: 'Customized Pillow', price: 600, img: require('./assets/images/pillow.jpg') },
  { id: 3, name: 'Smart Mug Warmer', price: 1200, img: require('./assets/images/mugwarmer.jpg') },
  { id: 4, name: 'Indoor Plant', price: 350, img: require('./assets/images/plant.jpg') },
  { id: 5, name: 'Bluetooth Earbuds', price: 2000, img: require('./assets/images/earbuds.jpg') },
  { id: 6, name: 'Handmade Journal', price: 450, img: require('./assets/images/journal.jpg') },
  { id: 7, name: 'Personalized Calendar', price: 550, img: require('./assets/images/calender.jpg')},
];

export default function App() {
  const [budget, setBudget] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BudgetPage setBudget={setBudget} />} />
        <Route path="/gifts" element={<GiftsPage gifts={gifts} budget={budget} cart={cart} setCart={setCart} />} />
        <Route path="/exceeded" element={<ExceedPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/bill" element={<BillPage cart={cart} />} />
      </Routes>
    </Router>
  );
}
