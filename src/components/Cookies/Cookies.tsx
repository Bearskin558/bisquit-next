import React, { useContext } from 'react';

import styles from './Cookies.module.scss';
import PriceBlock from '../PriceBlock';
import { TypeImg } from '../TopContent/images';
import ImageContent from '../ImageContent';

const images: TypeImg[] = [
  { src: 'img/cookies/1.jpg', alt: 'cookies-1' },
  { src: 'img/cookies/2.jpg', alt: 'cookies-2' },
  { src: 'img/cookies/3.jpg', alt: 'cookies-3' },
];

const Cookies = () => {
  return (
    <section id="cookies">
      <h2>печенье</h2>
      <PriceBlock text="80 ₽/шт" />
      <p className={styles.description}>
        ванильное или шоколадное печенье с кусочками шоколада в индивидуальных
        пакетиках
      </p>
      <ImageContent images={images} />
      <p className={styles.orderInfo}>заказ от 12 шт</p>
    </section>
  );
};

export default Cookies;
