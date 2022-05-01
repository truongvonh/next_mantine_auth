import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import AuthFeature from '@features/Auth';
import MainPageLayout from '@layouts/PageWrapper';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter();
  return (
    <MainPageLayout title="Nextjs the login page!">
      <AuthFeature />
    </MainPageLayout>
  );
};

export default Home;
