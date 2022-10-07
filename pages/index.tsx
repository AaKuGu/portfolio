import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { fadeInUp, routerAnimation, stagger } from "../animations";
import {motion} from 'framer-motion'

const index = () => {

  console.log('client',services)

  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow h-[540px]"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="pt-4 font-medium flex-grow">
        I am currently pursuing 'B.Tech' and blah and blah Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Incidunt et odit culpa aut,
        earum blanditiis eaque Lorem ipsum dolor sit amet consectetur
        adipisicing elit. A, accusamus.
      </h5>
      <div
        className="bg-gray-400 dark:bg-dark-200 flex-grow-[2] px-4 overflow-auto pb-4"
        style={{ marginRight: "-1.5rem", marginLeft: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl tracking-wider font-bold ">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2  "
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((services) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
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
