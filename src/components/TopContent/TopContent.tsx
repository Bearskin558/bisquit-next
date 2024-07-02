import React from 'react';

import styles from './TopContent.module.scss';
import listTopImg from './images';
import ImageBlock from '../ImageBlock';
import Slider from '../Slider';
import Image from 'next/image';

const TopContent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        {listTopImg.map((img) => {
          return <ImageBlock src={img.src} alt={img.alt} key={img.alt} />;
        })}
      </div>

      <Slider images={listTopImg} />
      <blockquote className={styles.blockquote}>
        <Image
          loading="lazy"
          src="img/top-content/quote-left.svg"
          alt="quote-left"
          width={30}
          height={30}
        />
        <p>
          счастье нельзя купить, но можно купить пирожное, а это почти то же
          самое
        </p>
        <Image
          src="img/top-content/quote-right.svg"
          alt="quote-right"
          width={30}
          height={30}
        />
      </blockquote>
    </div>
  );
};

export default TopContent;
