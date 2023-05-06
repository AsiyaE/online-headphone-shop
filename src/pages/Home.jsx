import React from 'react';
import ProductCard from '../components/ProductCard/index.jsx';
import { headphones } from '../assets/data.js';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">Наушники</h2>
      <div className="home-items">
        {headphones
          .filter((card) => card.wireless === 0)
          .map((card, id) => (
            <ProductCard key={id} {...card} />
          ))}
      </div>
      <h2 className="home-title">Беспроводные наушники</h2>
      <div className="home-items">
        {headphones
          .filter((card) => card.wireless)
          .map((card, id) => (
            <ProductCard key={id} {...card} />
          ))}
      </div>
    </div>
  );
};

export default Home;
