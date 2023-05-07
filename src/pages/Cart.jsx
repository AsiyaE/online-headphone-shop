import React from 'react';
import CartItem from '../components/CartItem/index.jsx'
import img1 from '../assets/img/earphone1.png'


const Cart = () => {
  return (
    <div className='cart'>
      <h2 className="cart-title">Корзина</h2>
      <div className="cart-content">
        <div className="cart-list">
          <CartItem 
            img={img1}
            title='Apple BYZ S852I'
            price={2927}
          />
        </div>
        <div className="total">
          <div className="total-price">
            <span>ИТОГО</span>
            <span>₽ 2 927</span>
          </div>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
