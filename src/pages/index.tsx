import Head from "next/head";
import { Hero } from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NextJS Subscription</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Layout>
  );
}
