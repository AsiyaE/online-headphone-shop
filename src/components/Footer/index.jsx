import React, { useState } from 'react';
import styles from './Footer.module.scss';
import langSvg from '../../assets/img/Lang.svg';
import vkLogo from '../../assets/img/VK.svg';
import telegramLogo from '../../assets/img/Telegram.svg';
import waLogo from '../../assets/img/Whatsapp.svg';

const options = ['Избранное', 'Корзина', 'Контакты'];
const languages = ['Каз', 'Рус', 'Eng'];

const Footer = () => {
  const [selectedLg, setLanguage] = useState('Рус');
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
              <li
                key={lang}
                className={selectedLg === lang ? styles.selected : ''}
                onClick={() => setLanguage(lang)}>
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <img width="30" src={vkLogo} alt="vk" />
        <img width="30" src={telegramLogo} alt="telegram" />
        <img width="30" src={waLogo} alt="whatsapp" />
      </div>
    </div>
  );
};

export default Footer;
