import React from 'react';

import styles from './Main.module.css';
import TopContent from '../TopContent';
import Bento from '../Bento';
import Cakes from '../Cakes';
import Cupcakes from '../Cupcakes';
import Trifles from '../Trifles';
import Macarons from '../Macarons';
import Toffee from '../Toffee';
import Cookies from '../Cookies';

const Main = () => {
  return (
    <main className={styles.main}>
      <TopContent />
      <Bento />
      <Cakes />
      <Cupcakes />
      <Trifles />
      <Macarons />
      <Toffee />
      <Cookies />
    </main>
  );
};

export default Main;
