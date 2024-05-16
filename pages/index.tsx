import Head from 'next/head';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600'],
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Best By</title>
        <meta name="description" content="Service for tracking product expiration dates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div>
          <p className={`${inter.className}`} style={{ fontWeight: 500 }}>Inter 500</p>
          <p className={`${inter.className}`} style={{ fontWeight: 600 }}>Inter 600</p>

          <p className={`${manrope.className}`} style={{ fontWeight: 400 }}>Manrope 400</p>
          <p className={`${manrope.className}`} style={{ fontWeight: 500 }}>Manrope 500</p>
        </div>
      </main>
    </>
  );
}
