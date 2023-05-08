import React from 'react';
import ProductCard from '../components/ProductCard/index.jsx';

const Home = ({ items, addToOrder }) => {
  return (
    <div className="home">
      <h2 className="home-title">Наушники</h2>
      <div className="home-items">
        {items
          .filter((card) => card.wireless === 0)
          .map((card) => (
            <ProductCard key={card.id} addToOrder={addToOrder} {...card} />
          ))}
      </div>
      <h2 className="home-title">Беспроводные наушники</h2>
      <div className="home-items">
        {items
          .filter((card) => card.wireless)
          .map((card) => (
            <ProductCard key={card.id} addToOrder={addToOrder} {...card} />
          ))}
      </div>
    </div>
  );
};

export default Home;
