import React, { useContext } from 'react';

import styles from './Cupcakes.module.scss';
import Constructor from '../Constructor';
import PriceBlock from '../PriceBlock';
import { TypeImg } from '../TopContent/images';
import ImageContent from '../ImageContent';

const images: TypeImg[] = [
  { src: 'img/cupcakes/1.jpg', alt: 'bento-1' },
  { src: 'img/cupcakes/2.jpg', alt: 'bento-2' },
  { src: 'img/cupcakes/3.jpg', alt: 'bento-3' },
];

const Cupcakes = () => {
  return (
    <section className={styles.cupcakes} id="cupcakes">
      <h2>капкейки</h2>
      <PriceBlock text="200 ₽/шт" />
      <Constructor />
      <ImageContent images={images} />
      <p className={styles.description}>
        декор оплачивается отдельно, заказ от 6 шт одного вкуса
      </p>
    </section>
  );
};

export default Cupcakes;
