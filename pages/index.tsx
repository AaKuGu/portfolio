import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { fadeInUp, routerAnimation, stagger } from "../animations";
import { motion } from "framer-motion";

const index = () => {
  console.log("client", services);

  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow py-10 h-full gap-3"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="pt-4 font-medium flex-grow">
        I am currently pursuing 'B.Tech (Hons)' in the field of Computer Science
        Engineering and currently a third-year undergraduate student who is
        passionate about technology and aims to serve people the best through my
        skillset. I am very much interested in Freelancing which can give me
        'Time' & 'Location' freedom so that I can work from anywhere in the
        world and any time required. I have made many projects which you can see
        in the 'Projects' section and keep on improving them further, along with
        that new projects on real-life problems are also coming soon.
      </h5>
      <div
        className="bg-gray-400 dark:bg-dark-200 flex-grow-[2] px-4 overflow-auto pb-4 my-5 lg:my-0"
        style={{ marginRight: "-1.5rem", marginLeft: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl tracking-wider font-bold ">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2  h-[85%] "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((services) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1 flex items-center justify-center h-full"
            >
              <ServiceCard services={services} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getStaticProps = async () => {
//   // const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//   // const data = await res.json()
//   return {
//     props : {
//       services : data
//     }
//   }
// }
