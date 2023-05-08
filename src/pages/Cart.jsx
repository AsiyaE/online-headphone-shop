import React from 'react';
import CartItem from '../components/CartItem/index.jsx';

const Cart = ({ orderList, addToOrder, removeOneFromOrder, removeProductFromOrder }) => {
  const totalSum = orderList.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className="cart">
      <h2 className="cart-title">Корзина</h2>
      <div className="cart-content">
        <div className="cart-list">
          {orderList.map((item) => (
            <CartItem
              key={item.id}
              addToOrder={addToOrder}
              removeOne={removeOneFromOrder}
              removeItem={removeProductFromOrder}
              {...item}
            />
          ))}
        </div>
        <div className="total">
          <div className="total-price">
            <span>ИТОГО</span>
            <span>₽ {totalSum.toLocaleString()}</span>
          </div>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
