import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  weight: ['500', '600'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

const manrope = Manrope({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} ${manrope.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
