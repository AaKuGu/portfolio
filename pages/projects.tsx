import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routerAnimation, stagger } from "../animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState("all");

  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    console.log("clicked!");
    setActive(category);
    if (category === "all") {
      setProjects(projectData);
      return;
    }

    const newArray = projectData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 h-[73vh] overflow-y-auto"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative "
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 sm:col-span-6  bg-sky-400 dark:bg-dark-200 rounded-lg text-black font-bold"
            variants={fadeInUp}
          >
            <ProjectCard
              project={project}
              key={project.name}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
