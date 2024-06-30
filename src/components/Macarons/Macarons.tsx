import React, { useContext } from 'react';

import styles from './Macarons.module.scss';
import PriceBlock from '../PriceBlock';
import { TypeImg } from '../TopContent/images';
import ImageContent from '../ImageContent';

const fillings = [
  'черника',
  'сникерс',
  'шоколад',
  'малина',
  'вишня',
  'баунти',
  'ваниль',
];

const macaronsImages: TypeImg[] = [
  { src: 'img/macarons/1.jpg', alt: 'maracon-1' },
  { src: 'img/macarons/2.jpg', alt: 'maracon-2' },
  { src: 'img/macarons/3.jpg', alt: 'maracon-3' },
];

const cakesImages: TypeImg[] = [
  { src: 'img/macarons/4.jpg', alt: 'maracon-1' },
  { src: 'img/macarons/5.jpg', alt: 'maracon-2' },
  { src: 'img/macarons/6.jpg', alt: 'maracon-3' },
];

const Macarons = () => {
  return (
    <section id="macarons">
      <h2>макарон</h2>
      <PriceBlock text="100 ₽/шт" />
      <div className={styles.fillings}>
        <h3>Вкусы:</h3>
        <div className={styles.fillingsList}>
          {fillings.map((fill) => {
            return (
              <p className={styles.fillingsItem} key={fill}>
                {fill}
              </p>
            );
          })}
        </div>
      </div>
      <ImageContent images={macaronsImages} />
      <p className={styles.orderInfo}>заказ от 20 шт одного вкуса</p>
      <PriceBlock text="3000 ₽" />
      <p className={styles.description}>
        27 макарон в форме торта-куба с одним из представленных вкусов
      </p>
      <ImageContent images={cakesImages} />
    </section>
  );
};

export default Macarons;
