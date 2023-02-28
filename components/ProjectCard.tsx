import React, { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "../node_modules/next/image";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp, stagger } from "../animations";
import Link from "../node_modules/next/link";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetails: number | null;
  setShowDetails: (id: null | number) => void;
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
  setShowDetails,
}) => {
  return (
    <>
      <motion.div className="w-full ">
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
        {/* =========================================== big_box ========================================== */}
        {showDetails === id && (
          <div className="big_box h-fit w-full absolute top-0 left-0 bg-gray-900 text-white rounded-lg z-10 lg:flex lg:py-5 py-0 items-center justify-center">
            <div className="big_box_top l_big_box_left p-2 lg:px-2 lg:w-[50%]">
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
                className="big_box_top_buttons l_big_box_left_buttons mt-3 sm:flex sm:flex-row flex flex-col justify-center sm:text-md text-base gap-4 py-5 tracking-wider px-4"
                variants={fadeInDown}
                initial="initial"
                animate="animate"
              >
                <Link href={github_url}>
                  <a
                    className="flex justify-center items-center gap-1 bg-gray-600 px-2 py-2 rounded-md"
                    target="_blank"
                  >
                    <AiFillGithub />
                    <span>Github</span>
                  </a>
                </Link>

                <Link href={deployed_url}>
                  <a
                    className="flex justify-center items-center gap-1 bg-gray-600 px-5 py-2 rounded-md"
                    target="_blank"
                  >
                    <AiFillProject />
                    <span>Project</span>
                  </a>
                </Link>
              </motion.div>
            </div>

            <div className="big_box_down  l_big_box_right mt-5 flex-col items-center justify-center lg:ml-5 px-2 py-2">
              <motion.span
                className="flex justify-center md:text-3xl text-xl font-rubik tracking-wider lg:justify-start "
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {name}
              </motion.span>
              <motion.span
                className="flex justify-center md:mt-3  lg:justify-start mt-2"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                {description}
              </motion.span>

              <div className="flex justify-center font-bold gap-3 mt-10 lg:mt-16 text-[10px] md:text-lg mb-5 lg:text-[15px] ">
                {key_techs.map((techs) => (
                  <motion.div
                    className="flex bg-gray-600 px-3 rounded-md py-1 lg:px-2 lg:py-1 text-center h-fit"
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
