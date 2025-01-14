import React from 'react';

import styles from './Cakes.module.scss';
import PriceBlock from '../PriceBlock';

const Cakes = () => {
  return (
    <section className={styles.cakes} id="cakes">
      <h2>торты</h2>
      <PriceBlock text="1700 ₽/кг" />
      <div className={styles.filling}>
        <div className={styles.fillingItem}>
          <img
            loading="lazy"
            className={styles.fillingImage}
            src="img/fillings/forest.jpg"
            alt="черный лес"
          />
          <div className={styles.fillingText}>
            <p className={styles.fillingTitle}>черный лес</p>
            <p>шоколадный бисквит, кремчиз, вишня</p>
          </div>
        </div>
        <div className={styles.fillingItem}>
          <img
            loading="lazy"
            className={styles.fillingImage}
            src="img/fillings/vanilla.jpg"
            alt="ваниль-ягоды"
          />
          <div className={styles.fillingText}>
            <p className={styles.fillingTitle}>ваниль-ягоды</p>
            <p>ванильный бисквит, кремчиз, ягодная начинка</p>
          </div>
        </div>
        <div className={styles.fillingItem}>
          <img
            className={styles.fillingImage}
            src="img/fillings/snickers.jpg"
            alt="сникерс"
            loading="lazy"
          />
          <div className={styles.fillingText}>
            <p className={styles.fillingTitle}>сникерс</p>
            <p>шоколадный бисквит, кремчиз, карамель, арахис</p>
          </div>
        </div>
        <div className={styles.fillingItem}>
          <img
            loading="lazy"
            className={styles.fillingImage}
            src="img/fillings/velvet.jpg"
            alt="красный бархат"
          />
          <div className={styles.fillingText}>
            <p className={styles.fillingTitle}>красный бархат</p>
            <p>бархатный бисквит, кремчиз, клубничная или вишневая начинка</p>
          </div>
        </div>
        <div className={styles.fillingItem}>
          <img
            loading="lazy"
            className={styles.fillingImage}
            src="img/fillings/chocolate.jpg"
            alt="двойной шоколад"
          />
          <div className={styles.fillingText}>
            <p className={styles.fillingTitle}>двойной шоколад</p>
            <p>шоколадный бисквит, ганаш на молочном шоколаде</p>
          </div>
        </div>
        <div className={styles.fillingItem}>
          <img
            loading="lazy"
            className={styles.fillingImage}
            src="img/fillings/lemon.jpg"
            alt="мак-лимон"
          />
          <div className={styles.fillingText}>
            <p className={styles.fillingTitle}>мак-лимон</p>
            <p>маковые коржи, кремчиз, лимонный курд</p>
          </div>
        </div>
      </div>
      <p className={styles.fillingDescription}>
        к заказу доступны представленные начинки в пяти весовых вариантах:{' '}
        <br /> 1 – 1,5 – 2 – 2,5 – 3 кг <br />
        декор оплачивается отдельно
      </p>
    </section>
  );
};

export default Cakes;
