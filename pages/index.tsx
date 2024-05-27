import Head from 'next/head';
import { Benefit } from '../components/Benefit/Benefit';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Hero } from '../components/Hero/Hero';
import { Audience } from '../components/Audience/Audience';
import { Possibilities } from '../components/Possibilities/Possibilities';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best By</title>
        <meta name="description" content="Service for tracking product expiration dates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <Hero />
        <Benefit />
        <Audience />
        <Possibilities />
      </Layout>
    </>
  );
}
