import React from 'react';

import styles from './ImageContent.module.scss';
import { TypeImg } from '../TopContent/images';
import Slider from '../Slider';
import Image from 'next/image';

type Props = {
  images: TypeImg[];
};

const ImageContent = ({ images }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        {images.map((img) => {
          return (
            <Image
              loading="lazy"
              src={`/${img.src}`}
              alt={img.alt}
              className={styles.img}
              key={img.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '100%' }}
            />
          );
        })}
      </div>
      <Slider images={images} />
    </div>
  );
};

export default ImageContent;
