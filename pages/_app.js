import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import NavBar from "../components/ui/NavBar/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Virtual Medical Missions</title>
        <meta
          name='description'
          content='Legacy of Healing'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            <NavBar/>
            <Component {...pageProps} />
          </AnimatePresence>
        </LazyMotion>
      </main>
    </>
  );
}
