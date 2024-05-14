import Head from 'next/head';
import { Inter, Montserrat, Manrope } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '700'],
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
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <p className={`${inter.className}`} style={{ fontWeight: 400 }}>Inter 400</p>
          <p className={`${inter.className}`} style={{ fontWeight: 500 }}>Inter 500</p>
          <p className={`${inter.className}`} style={{ fontWeight: 600 }}>Inter 600</p>

          <p className={`${montserrat.className}`} style={{ fontWeight: 500 }}>Montserrat 500</p>
          <p className={`${montserrat.className}`} style={{ fontWeight: 700 }}>Montserrat 700</p>

          <p className={`${manrope.className}`} style={{ fontWeight: 400 }}>Manrope 400</p>
          <p className={`${manrope.className}`} style={{ fontWeight: 500 }}>Manrope 500</p>

          <p className="arialRegular">Arial 400</p>

          <p className="helveticaLight">Helvetica 300</p>
          <p className="helveticaRegular">Helvetica 400</p>
        </div>
      </main>
    </>
  );
}
