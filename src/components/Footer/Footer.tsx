import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.contacts}>
            <p className={styles.contactsTitle}>Контакты</p>
            <div className={styles.contactsList}>
              <a
                className={styles.contactsItem}
                href="https://wa.me/79029344383"
                target="_blank"
              >
                <img src="/img/footer/whatsapp.svg" alt="whatsapp" />
                <span>Whatsapp</span>
              </a>
              <a
                className={styles.contactsItem}
                href="https://t.me/+79029344383"
                target="_blank"
              >
                <img src="/img/footer/telegram.svg" alt="telegram" />
                <span>Telegram</span>
              </a>
              <a
                className={styles.contactsItem}
                href="https://vk.com/biscuit_bakeryshop"
                target="_blank"
              >
                <img src="/img/footer/vk.svg" alt="vk" />
                <span>ВКонтакте</span>
              </a>
              <a className={styles.contactsItem} href="tel:+79029344383">
                <img src="/img/footer/phone.svg" alt="phone" />
                <span>+79029344383</span>
              </a>
            </div>
          </div>
          <div className={styles.location}>
            <div>
              <img
                src="img/location.svg"
                alt="location"
                className={styles.locationImg}
              />
              <p className={styles.locationTitle}>Адрес</p>
            </div>
            <p className={styles.locationText}>Калуга, ул. Болотникова</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
