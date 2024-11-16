import Head from "next/head";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Footer from "./components/Footer";

function LinksIndex() {
  return (
    <>
      <Head>
        <title>alexisintech | Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Alexis Aguilar's social links, all in one place for convenience."
        />
      </Head>
      <div className="min-h-screen text-white bg-black links-index">
        <div className="container flex flex-col items-center mx-auto min-h-screen text-center">
          <Hero />
          <Links />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LinksIndex;
