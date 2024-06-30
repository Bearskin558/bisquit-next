import React, { useContext } from 'react';

import styles from './Toffee.module.scss';
import PriceBlock from '../PriceBlock';
import ImageContent from '../ImageContent';
import { TypeImg } from '../TopContent/images';

const images: TypeImg[] = [
  { src: 'img/toffee/1.jpg', alt: 'toffee-1' },
  { src: 'img/toffee/2.jpg', alt: 'toffee-2' },
  { src: 'img/toffee/3.jpg', alt: 'toffee-3' },
];

const Toffee = () => {
  return (
    <section id="toffee">
      <h2>Ириски</h2>
      <PriceBlock text="60 ₽/шт" />
      <p className={styles.description}>
        сливочные конфеты: классические или с морской солью
      </p>
      <ImageContent images={images} />
      <p className={styles.orderInfo}>заказ от 16 шт</p>
    </section>
  );
};

export default Toffee;
