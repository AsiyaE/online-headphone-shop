import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.scss';
import MainLayout from './layouts/MainLayout';
import useSessionStorage from './hooks/useSessionStorage';
import { headphones } from './assets/data.js';

function App() {
  const [order, setOrder] = useSessionStorage([], 'order');

  const addOneToOrder = (id) => {
    const existItem = order.find((item) => item.id === id);

    if (typeof existItem !== 'undefined') {
      existItem.count++;
      const subArray = order.filter((obj) => obj.id !== id);
      setOrder([...subArray, existItem].sort((obj1, obj2) => obj1.id - obj2.id));
    } else {
      const newItem = headphones.find((item) => item.id === id);
      newItem.count = 1;
      setOrder((prev) => [...prev, newItem].sort((obj1, obj2) => obj1.id - obj2.id));
    }
  };

  const removeOneFromOrder = (id) => {
    const existItem = order.find((item) => item.id === id);
    if (existItem.count > 1) {
      existItem.count--;
      const subArray = order.filter((obj) => obj.id !== id);
      setOrder([...subArray, existItem].sort((obj1, obj2) => obj1.id - obj2.id));
    }
  };

  const removeProductFromOrder = (id) => {
    setOrder((prev) => [...prev.filter((item) => item.id !== id)]);
  };

  const cartItemsNumber = order.reduce((acc, item) => acc + item.count, 0);

  return (
    <Routes>
      <Route path="/" element={<MainLayout cartItemsNumber={cartItemsNumber} />}>
        <Route path="/" element={<Home order items={headphones} addToOrder={addOneToOrder} />} />
        <Route
          path="/cart"
          element={
            <Cart
              orderList={order}
              addToOrder={addOneToOrder}
              removeOneFromOrder={removeOneFromOrder}
              removeProductFromOrder={removeProductFromOrder}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
