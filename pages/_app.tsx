import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { useEffect } from 'react';
import router from 'next/router';
import '@/styles/index.scss';

const manrope = Manrope({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

const isMetricsEnabled = process.env.NODE_ENV === 'production';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (document.cookie.includes('cookieAccept=true') && typeof window !== 'undefined' && isMetricsEnabled) {
        window.ym(97415894, 'hit', url);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${manrope.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
