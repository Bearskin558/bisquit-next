import React from 'react';

import styles from './ImageBlock.module.css';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

const ImageBlock = ({ src, alt }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={`/${src}`}
        width={0}
        height={0}
        alt={alt}
        className={styles.img}
        loading="lazy"
        sizes="100vw"
        style={{ width: 'auto', height: '100%' }}
      />
    </div>
  );
};

export default ImageBlock;
