import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Head from "../node_modules/next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>About Me</title>
      </Head>
      <div className="grid grid-cols-12 gap-6 my-14 lg:px-25 px-5 sm:mx-5 mx-6 xl:px-48 ">
        <div className="lg:col-span-4 p-4 text-center col-span-12 bg-white dark:bg-dark-500 rounded-2xl ] shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="lg:col-span-8 col-span-12 bg-white rounded-2xl flex-col overflow-hidden dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark ">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
