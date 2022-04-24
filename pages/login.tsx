import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AuthFeature from '@features/Auth';

const LoginPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AuthFeature />
      </main>
    </div>
  );
};

export default LoginPage;