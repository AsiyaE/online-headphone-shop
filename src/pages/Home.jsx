import React from 'react';
import ProductCard from '../components/ProductCard/index.jsx';
import { headphones } from '../assets/data.js';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">Наушники</h2>
      {headphones.map((card, id) => (
        <ProductCard key={id} {...card} />
      ))}
    </div>
  );
};

export default Home;
