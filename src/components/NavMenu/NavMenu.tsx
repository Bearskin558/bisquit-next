import React from 'react';

import styles from './NavMenu.module.scss';
import NavItem from '../NavItem';
import Image from 'next/image';

const navItems = {
  bento: 'бенто-торты',
  cakes: 'торты',
  cupcakes: 'капкейки',
  trifles: 'трайфлы',
  macaron: 'макарон',
  toffee: 'ириски',
  cookies: 'печенье',
  contacts: 'контакты',
};

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ isOpen, setIsOpen }: Props) => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const onClose = React.useCallback((e: MouseEvent) => {
    if (e.target !== menuRef.current) setIsOpen(false);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      wrapperRef.current?.addEventListener('click', onClose);
    } else {
      wrapperRef.current?.removeEventListener('click', onClose);
    }
  }, [isOpen]);

  return (
    <div
      className={isOpen ? styles.wrapperOpen : styles.wrapper}
      ref={wrapperRef}
    >
      <nav
        className={
          isOpen ? styles.navMenu : `${styles.navMenu} ${styles.close}`
        }
        ref={menuRef}
      >
        <button className={styles.closeButton}>
          <Image src="img/close.svg" alt="close" width={35} height={35} />
        </button>
        {Object.entries(navItems).map(([id, text]) => {
          return <NavItem text={text} key={text} elementIdToScroll={id} />;
        })}
      </nav>
    </div>
  );
};

export default NavMenu;
