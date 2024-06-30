'use client';
import React from 'react';
import NavMenu from '../NavMenu';

import styles from './Header.module.css';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  return (
    <header className={styles.header}>
      <button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        className={styles.toggleMenuButton}
        aria-label="openMenu"
      >
        <img src="img/toggle-menu.svg" alt="toggle-menu" width="100%" />
      </button>
      <img src="img/logo.png" alt="logo" className={styles.logo}></img>
      <NavMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      <div className={styles.locationBlock}>
        <img
          src="img/location.svg"
          alt="location"
          className={styles.locationImg}
        />
        <p className={styles.locationText}>калуга</p>
      </div>
    </header>
  );
};

export default Header;
