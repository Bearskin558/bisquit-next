import styles from './page.module.css';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}
