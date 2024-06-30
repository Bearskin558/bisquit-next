import React from 'react';

import styles from './ImageContent.module.scss';
import { TypeImg } from '../TopContent/images';
import Slider from '../Slider';

type Props = {
  images: TypeImg[];
};

const ImageContent = ({ images }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        {images.map((img) => {
          return (
            <img
              loading="lazy"
              src={img.src}
              alt={img.alt}
              className={styles.img}
              key={img.alt}
            />
          );
        })}
      </div>
      <Slider images={images} />
    </div>
  );
};

export default ImageContent;
