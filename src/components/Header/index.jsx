import React from 'react';
import styles from './Header.module.scss';
import ItemCounter from '../ItemCounter/index';

const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.name}>QPICK</h1>
    <ItemCounter svg="like" count={1} />
    <ItemCounter svg="cart" count={2} />
  </div>
);

export default Header;
