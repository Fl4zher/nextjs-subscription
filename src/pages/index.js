import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Subscription</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col justify-center">
        <img
          className="m-auto my-4 w-24 sm:w-auto"
          alt="Novusweb"
          src="/assets/logo_v1.png"
        />
        <h1 className="mx-auto text-4xl font-bold">Welcome</h1>
      </main>
    </div>
  );
}
