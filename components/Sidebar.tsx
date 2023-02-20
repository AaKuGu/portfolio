import React from "react";
import Link from "../node_modules/next/link";
import { AiFillYoutube, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { useTheme } from "next-themes";
import Image from "../node_modules/next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = (e) => {
    e.preventDefault()
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-[570px]">
      <div className="main">
        <div className="img flex justify-center">
          <Image
            className="items-center rounded-full w-[120px] h-[120px]"
            src="/images/Adarsh.jpg"
            alt="Profile Pic"
            width={120}
            height={120}
            layout="fixed"
          />  
        </div>
        <div className="name_div flex justify-center gap-[20px] text-4xl mt-4">
          <span className="name_first font-kaushan text-green">Aadarsh</span>
          <span className="name_last">
            <span>Gupta</span>
          </span>
        </div>
        <div className="first_options flex flex-col items-center justify-center mt-4 gap-3">
          <Link href="/">
            <a className="border  w-full rounded-full py-2 bg-gray-200 dark:bg-dark-200 tracking-wider">
              <span>Web Developer</span>
            </a>
          </Link>
          <Link href="/resume">
            <a
              className="border  w-full rounded-full py-2 bg-gray-200 dark:bg-dark-200  tracking-wider"
              download="name"
            >
              <span>Download Resume</span>
            </a>
          </Link>
        </div>
        <div className="social_icons flex justify-center mt-4 text-4xl text-green gap-10 md:gap-20 lg:gap-12">
          <Link href="/https://youtube.com/">
            <a>
              <AiFillYoutube />
            </a>
          </Link>
          <Link href="https://github.com/AaKuGu">
            <a>
              <AiFillGithub />
            </a>
          </Link>
          <Link href="/https://youtube.com/">
            <a>
              <AiFillLinkedin />
            </a>
          </Link>
        </div>
        <div className="address flex flex-col gap-2 bg-gray-200 dark:bg-dark-200  my-4 py-4 tracking-wider">
          <span className="flex justify-center items-center gap-3">
            <GrLocation />
            Mirzapur, India
          </span>
          <span className="flex justify-center items-center gap-3">
            prathamtogupta11@gmail.com
          </span>
          <span className="flex justify-center items-center gap-3">
            3823920138907
          </span>
        </div>
        <div className="end_buttons flex flex-col tracking-wider text-white gap-3 font-bold mt-6 lg:mt-5 items-center">
          <Link href="/">
            <a className="border rounded-full py-2 w-[200px] bg-gradient-to-r from-blue-600 to-green-600 ">
              Email Me
            </a>
          </Link>
          <Link href="/">
            <a
              className="border rounded-full py-2 w-[200px] bg-gradient-to-r from-blue-600 to-green-600 "
              onClick={changeTheme}
            >
              Toggle Theme
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
