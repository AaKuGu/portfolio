import React, { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "../node_modules/next/image";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetails : number | null;
  setShowDetails : (id: null | number) => void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetails,
  setShowDetails
}) => {

  return (
    <>
      <motion.div className="w-full">
        <Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => {
            setShowDetails(id);
          }}
          width="300"
          height="150"
          layout="responsive"
        />
        <p className="my-2 text-center">{name}</p>
        {/* ============================================== big_box ============================================ */}
        {showDetails === id && (
          <div className="big_box h-fit w-full absolute top-0 left-0 bg-gray-900 text-white rounded-lg z-10 lg:flex py-0 lg:py-5">
            <div className="big_box_top l_big_box_left p-2 lg:px-5 lg:w-[50%]">
              <motion.div
                className="big_box_top_image l_big_box_left_image border-2 border-white rounded-lg"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={image_path}
                  alt="pic"
                  width={300}
                  height={150}
                  layout="responsive"
                  className="rounded-lg"
                />
              </motion.div>

              <motion.div
                className="big_box_top_buttons l_big_box_left_buttons mt-3 flex justify-center text-md gap-4 py-5 tracking-wider"
                variants={fadeInDown}
                initial="initial"
                animate="animate"
              >
                <a
                  href=""
                  className="flex justify-center items-center gap-1 bg-gray-600 px-3 py-1 rounded-md"
                >
                  <AiFillGithub />
                  <span>Github</span>
                </a>
                <a
                  href=""
                  className="flex justify-center items-center gap-1 bg-gray-600 px-5 py-2 rounded-md"
                >
                  <AiFillProject />
                  <span>Project</span>
                </a>
              </motion.div>
            </div>

            <div className="big_box_down l_big_box_right mt-5 flex-col items-center justify-center lg:ml-5">
              <motion.span
                className="flex justify-center text-3xl font-rubik tracking-wider lg:justify-start "
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {name}
              </motion.span>
              <motion.span
                className="flex justify-center mt-3 lg:justify-start "
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {description}
              </motion.span>

              <div className="flex justify-center gap-5 mt-10 lg:mt-16 text-lg mb-5 lg:text-md ">
                {key_techs.map((techs) => (
                  <motion.div
                    className="flex bg-gray-600 px-3 rounded-md py-1 lg:px-2 lg:py-0"
                    variants={fadeInDown}
                    initial="initial"
                    animate="animate"
                  >
                    {techs}
                  </motion.div>
                ))}
              </div>
            </div>

            <div
              className="big_box_cross absolute z-16 top-4 right-4 cursor-pointer text-xl rounded-full bg-gray-600 p-1"
              onClick={() => {
                setShowDetails(null);
              }}
            >
              <MdClose />
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ProjectCard;
