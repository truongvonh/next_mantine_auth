import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface IAppProps extends AppProps {
  session: Session;
}

function MyApp({ Component, pageProps }: IAppProps) {
  console.log({ session: pageProps.session });
  return (
    <SessionProvider session={pageProps.session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  );
}

export default MyApp;
