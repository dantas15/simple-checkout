import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Nunito } from 'next/font/google';
import './globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@simple-checkout/ui';
import { Suspense } from 'react';
import Loading from './loading';
import { ClientProviders } from './client-providers';
import { MainWrapper } from '@simple-checkout/ui/components';

const font = Nunito({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Checkout simples',
  description: 'Challenge da Woovi para Junior Frontend Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={font.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ClientProviders>
              <CssBaseline />
              <MainWrapper>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </MainWrapper>
            </ClientProviders>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
