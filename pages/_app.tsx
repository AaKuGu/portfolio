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
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-25 sm:mx-5 mx-2 mt-4 md:my-14 ">
        <div className="lg:col-span-3 p-4 text-center col-span-12 bg-white dark:bg-dark-500 rounded-2xl ] shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl flex-col overflow-hidden dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark w-full">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
        {/* <div className="w-full bg-black col-span-6">hii</div>
        <div className="w-full bg-blue-500 col-span-6">sai</div> */}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
