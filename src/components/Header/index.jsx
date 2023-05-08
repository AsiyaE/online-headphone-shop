import React from 'react';
import styles from './Header.module.scss';
import ItemCounter from '../ItemCounter/index';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsNumber }) => (
  <div className={styles.header}>
    <Link to="/" className={styles.name}>
      <h1>QPICK</h1>
    </Link>
    <ItemCounter svg="like" count={1} />
    <Link to="/cart">
      <ItemCounter svg="cart" count={cartItemsNumber} />
    </Link>
  </div>
);

export default Header;
