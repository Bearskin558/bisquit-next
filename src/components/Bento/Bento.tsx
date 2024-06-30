import React, { useContext } from 'react';

import styles from './Bento.module.scss';
import ImageBlock from '../ImageBlock';
// import { RefContext } from "../RefContextProvider/RefContextProvider"
import Slider from '../Slider';
import Constructor from '../Constructor';
import { TypeImg } from '../TopContent/images';
import ImageContent from '../ImageContent';

const simpleCakes: TypeImg[] = [
  {
    src: 'img/bento/bento-3.jpg',
    alt: 'bento-3',
  },
  {
    src: 'img/bento/bento-4.jpg',
    alt: 'bento-4',
  },
  {
    src: 'img/bento/bento-6.jpg',
    alt: 'bento-6',
  },
];

const hardCakes: TypeImg[] = [
  {
    src: 'img/bento/bento-1.jpg',
    alt: 'bento-1',
  },
  {
    src: 'img/bento/bento-2.jpg',
    alt: 'bento-2',
  },
  {
    src: 'img/bento/bento-5.jpg',
    alt: 'bento-5',
  },
];

const Bento = () => {
  return (
    <section className={styles.bento} id="bento">
      <div className={styles.bentoTitleBlock}>
        <h1>бенто - торты</h1>
        <p>вес ~500-600 г</p>
      </div>
      <Constructor />
      <div className={styles.cakes}>
        <div className={styles.cakesItem}>
          <p className={styles.cakesPrice}>
            <span>1200 ₽</span>
          </p>
          <p>с небольшой надписью, простым контурным рисунком</p>
          <ImageContent images={simpleCakes} />
        </div>
        <div className={styles.cakesItem}>
          <p className={styles.cakesPrice}>
            <span>1500 ₽</span>
          </p>
          <p>со сложным рисунком, большими надписями, сахарной печатью</p>
          <ImageContent images={hardCakes} />
        </div>
      </div>
    </section>
  );
};

export default Bento;
