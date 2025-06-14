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
        Self-driven and passionate Full Stack Developer with hands-on experience
        in the <b className={`${""} text-green-500`}>MERN stack and Next.js</b>.
        Recently completed a B.Tech (Hons.) in Computer Science and Engineering
        (2020–2024). Proficient in developing modern web applications with
        strong skills in state management using{" "}
        <b className={`${""} text-green-500`}>Redux and Zustand</b> . I Have
        Built a{" "}
        <span className={`${""} text-red-500 italic text-bold font-bold`}>
          Course Launcher App
        </span>{" "}
        and currently developing{" "}
        <span className={`${""} text-red-500 italic font-bold`}>
          Website Builder App
        </span>{" "}
        featuring{" "}
        <span className={`${""} text-red-500 italic font-bold`}>
          drag-and-drop
        </span>{" "}
        design,{" "}
        <span className={`${""} text-red-500 italic font-bold`}>
          email automation
        </span>{" "}
        ,{" "}
        <span className={`${""} text-red-500 italic font-bold`}>
          payment gateway integration
        </span>{" "}
        and{" "}
        <span className={`${""} text-red-500 italic font-bold`}>
          template customization
        </span>{" "}
        . Eager to contribute to innovative frontend and full-stack projects
        that make a real impact.
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
