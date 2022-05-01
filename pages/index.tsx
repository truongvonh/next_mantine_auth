import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import MainPageLayout from '@layouts/PageWrapper';

const Home: NextPage = () => {
  return (
    <MainPageLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </MainPageLayout>
  );
};

export default Home;
