import React from 'react';
import styles from './ProductCard.module.scss';
import star from '../../assets/img/star.svg';

const ProductCard = ({ id, img, title, price, rate, prevPrice, addToOrder }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.price}>
          <span>{price} ₽</span>
          {prevPrice && <span className={styles.prev}>{prevPrice} ₽</span>}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.rating}>
          <img src={star} alt="star" />
          <span>{rate}</span>
        </div>
        <button className={styles.buy} onClick={() => addToOrder(id)}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
