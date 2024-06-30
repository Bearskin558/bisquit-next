'use client';
import React, { useContext } from 'react';

import styles from './Trifles.module.scss';
import PriceBlock from '../PriceBlock';
import ImageContent from '../ImageContent';
import { TypeImg } from '../TopContent/images';

const images: TypeImg[] = [
  { src: 'img/trifles/1.jpg', alt: 'trifle-1' },
  { src: 'img/trifles/2.jpg', alt: 'trifle-2' },
  { src: 'img/trifles/3.jpg', alt: 'trifle-3' },
];

const Trifles = () => {
  const onClickHandler = () => {
    document.getElementById('cakes')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <section id="trifles">
      <h2>Трайфлы</h2>
      <PriceBlock text="250 р/шт" />
      <p className={styles.description}>
        торт в более удобном порционном формате на основе представленных{' '}
        <span className={styles.fillingsButton} onClick={onClickHandler}>
          начинок
        </span>
        : черный лес, ваниль-ягоды, сникерс, красный бархат, двойной шоколад,
        мак-лимон{' '}
      </p>
      <ImageContent images={images} />
      <p className={styles.orderInfo}>
        декор оплачивается отдельно, заказ от 6 шт одного вкуса
      </p>
    </section>
  );
};

export default Trifles;
