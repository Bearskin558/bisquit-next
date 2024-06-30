import React from "react"

import styles from "./Constructor.module.scss"

const Constructor = () => {
  return (
    <div className={styles.construct}>
      <p className={styles.constructTitle}>
        <span>конструктор</span>
      </p>

      <div className={styles.constructList}>
        <div className={styles.constructItem}>
          <p className={styles.constructItemTitle}>бисквит</p>
          <div className={styles.constructProperties}>
            <p>ванильный</p>
            <p>шоколадный</p>
            <p>красный бархат</p>
          </div>
        </div>
        <div className={styles.constructItem}>
          <p className={styles.constructItemTitle}>начинка</p>
          <div className={styles.constructProperties}>
            <p>вишня</p>
            <p>клубника</p>
            <p>карамель</p>
          </div>
        </div>
        <div className={styles.constructItem}>
          <p className={styles.constructItemTitle}>крем</p>
          <div className={styles.constructProperties}>
            <p>ванильный кремчиз</p>
            <p>шоколадный кремчиз</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Constructor
