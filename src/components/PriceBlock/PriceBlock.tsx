import React from "react"

import styles from "./PriceBlock.module.scss"

const PriceBlock = ({ text }: { text: string }) => {
  return (
    <div className={styles.priceWrapper}>
      <p>
        <span>{text}</span>
      </p>
    </div>
  )
}

export default PriceBlock
