import React, { useState } from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import {motion} from 'framer-motion'
import { fadeInUp, routerAnimation } from "../animations";

const resume = () => {

  return (
    <motion.div
      className="px-6 py-2"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-3 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Lovely Professional University</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Lovely Professional University
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-3 text-xl font-bold">Software Engineer Jr.</h5>
            <p className="font-semibold">TCS (2021- on )</p>
            <p className="my-3">I don't know why i am doing this job</p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((Language) => (
              <Bar data={Language} key={Language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
