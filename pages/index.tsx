import Head from 'next/head';
import { Benefit } from '../components/Benefit/Benefit';
import { Header } from '../components/Header/Header';
import { Layout } from '../components/Layout/Layout';
import { Hero } from '../components/Hero/Hero';
import { Audience } from '../components/Audience/Audience';
import { Possibilities } from '../components/Possibilities/Possibilities';
import { Demonstration } from '../components/Demonstration/Demonstration';
import { Advantages } from '../components/Advantages/Advantages';
import { Form } from '../components/Form/Form';
import { Footer } from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best By</title>
        <meta name="description" content="Service for tracking product expiration dates" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Layout>
        <Hero />
        <Benefit />
        <Audience />
        <Possibilities />
        <Demonstration />
        <Advantages />
        <Form />
        <Footer />
      </Layout>
    </>
  );
}
