import React from 'react';

import styles from './NavItem.module.css';

type Props = {
  // refToScroll: React.RefObject<HTMLDivElement>
  text: string;
  elementIdToScroll: string;
};

const NavItem = ({ text, elementIdToScroll }: Props) => {
  const onClick = () => {
    document.getElementById(elementIdToScroll)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <button
      className={styles.navItem}
      aria-label={`Перейти к разделу ${text}`}
      tabIndex={1}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NavItem;
