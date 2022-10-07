import React, { FunctionComponent } from "react";
import { ISkill } from "../type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
    const variants = {
      initial: {
        width: 0,
      },
      animate: {
        width: level,
        transition: {
          duration: 0.4,
          type:"spring",
          damping : 10,
          stiffness : 100
        },
      },
    };
  return (
    <div className="my-2 bg-gray-300 dark:bg-dark-200 rounded-full text-black font-bold tracking-wider">
      <motion.div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: level }}
        variants = {variants}
        initial  = "initial"
        animate = "animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
