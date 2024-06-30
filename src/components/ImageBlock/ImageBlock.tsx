import React from "react"

import styles from "./ImageBlock.module.css"

type Props = {
  src: string
  alt: string
}

const ImageBlock: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} alt={alt} className={styles.img} loading="lazy" />
    </div>
  )
}

export default ImageBlock
