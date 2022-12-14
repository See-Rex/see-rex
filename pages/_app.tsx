import '../styles/global.scss';
import "@fontsource/inter";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import "@fontsource/tenor-sans";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { useState } from 'react';
import SeeRexAlert from '../components/SeeRexAlert';
import { AuthContextProvider } from '../hooks/AuthContext';
import ProtectedRoute from '../routes/ProtectedRoute';
const authRequiredPaths = ['/dashboard'];

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const router = useRouter();

  const renderPageComponent = authRequiredPaths.includes(router.pathname) ? (
    <ProtectedRoute>
      <Component {...pageProps} />
    </ProtectedRoute>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <AuthContextProvider>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <SeeRexAlert />
        <MantineProvider>{renderPageComponent}</MantineProvider>
      </ColorSchemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
