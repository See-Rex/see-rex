import '../styles/global.scss';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
        <MantineProvider>{renderPageComponent}</MantineProvider>
      </ColorSchemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
