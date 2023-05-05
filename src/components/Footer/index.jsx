import React from 'react';
import styles from './Footer.module.scss';
import langSvg from '../../assets/img/Lang.svg';

const options = ['Избранное', 'Корзина', 'Контакты'];
const languages = ['Каз', 'Рус', 'Eng'];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.name}>QPICK</span>
      <nav className={styles.options}>
        <ul>
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </nav>
      <div className={styles.settings}>
        <span>Условия сервиса</span>
        <div className={styles.languages}>
          <img width="20" src={langSvg} alt="language" />
          <ul>
            {languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.social}>сети</div>
    </div>
  );
};

export default Footer;
